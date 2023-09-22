import express, { NextFunction } from "express";
import { Db, MongoClient, ObjectId } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config(".env");

const app = express();
const port = 8080; // Default port to listen on.
let db: Db;

// Middleware.
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

// ====================================================================
// Routes
// ====================================================================

app.get("/recipes", async (req, res) => {
  const collection = db.collection("recipes");
  const result = await collection.find({}).toArray();
  return res.json(result);
});

app.get("/recipes/:meal", async (req, res) => {
  const meal = req.params.meal;
  const collection = db.collection("recipes");
  try {
    const result = await collection.find({ meal }).toArray();
    return res.json(result);
  } catch (e) {
    return res.status(404).send(`no recipe found with name ${meal}`);
  }
});

app.get("/ratings", async (req, res) => {
  const collection = db.collection("recipes");
  try {
    const result = await collection.find({}).sort({ rating: -1 }).toArray();
    return res.json(result);
  } catch (e) {
    return res.status(404).send("could not sort ratings");
  }
});

app.patch("/recipes/:recipeID", async (req, res) => {
  const recipeID = req.params.recipeID;
  const newRating = parseFloat(req.body.rating);
  const collection = db.collection("recipes");
  try {
    const id = new ObjectId(recipeID);
    const recipe = await collection.findOne({ _id: id });
    recipe.allRatings.push(newRating);
    const totalRatings = recipe.allRatings.length;
    const sumOfRatings = recipe.allRatings.reduce(
      (acc: number, rating: number) => acc + rating,
      0
    );
    const newAverageRating = sumOfRatings / totalRatings;

    const updateRecipe = await collection.updateOne(
      { _id: id },
      { $set: { rating: newAverageRating, allRatings: recipe.allRatings } }
    );
    return res.json(updateRecipe);
  } catch (e) {
    return res.status(404).send(`no recipe found with id ${recipeID}`);
  }
});

app.patch("/recipes/:recipeID", async (req, res) => {
  const recipeID = req.params.recipeID;
  const isLiked = req.body.liked;
  const collection = db.collection("recipes");
  try {
    const id = new ObjectId(recipeID);
    const recipe = await collection.findOne({ _id: id });

    const updateRecipe = await collection.updateOne(
      { _id: id },
      { $set: { liked : isLiked } }
    );
    return res.json(updateRecipe);
  } catch (e) {
    return res.status(404).send(`no recipe found with id ${recipeID}`);
  }
});

/**
 * Populate database, mainly used to quickly test interactions
 */
async function seedDatabase() {
  try {
    const collection = db.collection("recipes");

    await collection.deleteMany({});
    await collection.insertMany([
      {
        image: "https://source.unsplash.com/08aic3qPcag",
        meal: "pho",
        instructions: "cook",
        rating: 9.7,
        allRatings: [9.7],
      },
      {
        image: "https://source.unsplash.com/O2yNzXdqOu0",
        meal: "sushi",
        instructions: "roll",
        rating: 9.65,
        allRatings: [9.65],
      },
      {
        image: "https://source.unsplash.com/6iqpLKqeaE0",
        meal: "cake",
        instructions: "bake",
        rating: 8.5,
        allRatings: [8.5],
      },
      {
        image: "https://source.unsplash.com/p91GLhQv35o",
        meal: "fried chicken",
        instructions: "fry",
        rating: 9.1,
        allRatings: [9.1],
      },
      {
        image: "https://source.unsplash.com/U4vWk_DXOT4",
        meal: "fries",
        instructions: "fry",
        rating: 9,
        allRatings: [9],
      },
      {
        image: "https://source.unsplash.com/pJbahi1QEFc",
        meal: "pad thai",
        instructions: "cook",
        rating: 9.5,
        allRatings: [9.5],
      },
      {
        image: "https://source.unsplash.com/z_PfaGzeN9E",
        meal: "tacos",
        instructions: "cook",
        rating: 9.4,
        allRatings: [9.3],
      },
      {
        image: "https://source.unsplash.com/flFd8L7_B3g",
        meal: "pasta",
        instructions: "boil",
        rating: 8.9,
        allRatings: [8.9],
      },
      {
        image: "https://source.unsplash.com/9Bqiusimq6M",
        meal: "burger",
        instructions: "grill",
        rating: 8.3,
        allRatings: [8.3],
      },
      {
        image: "https://source.unsplash.com/rotFzR9lX0E",
        meal: "cake",
        instructions: "bake",
        rating: 8.2,
        allRatings: [8.2],
      },
    ]);
    console.log("Database populated successfully");
  } catch (err) {
    console.log("Error populating database:", err);
  }
}

// Start the Express server.
function start() {
  const client = new MongoClient(process.env.ATLAS_URI);
  client
    .connect()
    .then(() => {
      console.log("Connected successfully to server");
      db = client.db("cookbook");
      app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
      });
      seedDatabase();
    })
    .catch((err) => {
      console.log("error connecting to mongoDB!", err);
    });
}

start();
