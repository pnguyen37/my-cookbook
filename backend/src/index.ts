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

// TODO: Implement a route handler that returns a list of all posts, ordered by date created.
app.get("/recipes", async (req, res) => {
  const collection = db.collection("recipes");
  const result = await collection.find({}).toArray();
  return res.json(result);
});

// TODO: Implement a route handler that creates a new post.
app.post("/recipes", async (req, res) => {
  const postBodyData = req.body;
  const collection = db.collection("recipes");
  const newPost = {
    image: postBodyData.image,
    meal: postBodyData.meal,
    instructions: postBodyData.instructions,
    rating: postBodyData.rating,
  };
  try {
    await collection.insertOne(newPost);
    return res.json(newPost);
  } catch (e) {
    return res.status(500).send();
  }
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

app.get("/posts/:postID", async (req, res) => {
  // res.send("TODO: GET /posts/{postID}");
  const postID = req.params.postID;
  const collection = db.collection("posts");
  try {
    const result = await collection.findOne({ _id: new ObjectId(postID) });
    return res.json(result);
  } catch (e) {
    return res.status(404).send(`no course found with id ${postID}`);
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

// TODO: Implement a route handler that updates the post associated with a given postID.
app.patch("/posts/:postID", async (req, res) => {
  // res.send("TODO: PATCH /posts/{postID}");
  const postID = req.params.postID;
  const data = req.body;
  const collection = db.collection("posts");
  try {
    const result = await collection.updateOne(
      { _id: new ObjectId(postID) },
      { $set: data }
    );
    return res.json(result);
  } catch (e) {
    return res.status(404).send(`no course found with id ${postID}`);
  }
});

// TODO: Implement a route handler that deletes the post associated with a given postID.
app.delete("/posts/:postID", async (req, res) => {
  // res.send("TODO: DELETE /posts/{postID}");
  const postID = req.params.postID;
  const collection = db.collection("posts");
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(postID) });
    return res.json(result);
  } catch (e) {
    return res.status(404).send(`no post found with id ${postID}`);
  }
});

// TODO: Implement a route handler that gets all the comments associated with a given postID.
app.get("/posts/:postID/comments", async (req, res) => {
  // res.send("TODO: GET /posts/{postID}/comments");
  const postID = req.params.postID;
  const collection = db.collection("comments");
  try {
    const result = await collection
      .find({ post: new ObjectId(postID) })
      .toArray();
    return res.json(result);
  } catch (e) {
    return res
      .status(404)
      .send(`no comments for the post found with id ${postID}`);
  }
});

// TODO: Implement a route handler that gets adds a comment to the post with the given postID.
app.post("/posts/:postID/comments", async (req, res) => {
  // res.send("TODO: POST /posts/{postID}/comments");
  const postID = req.params.postID;
  const postBodyData = req.body;
  const collection = db.collection("comments");
  const newComment = {
    content: postBodyData.content,
    post: new ObjectId(postID),
    createdAt: new Date(),
  };
  try {
    await collection.insertOne(newComment);
    return res.json(newComment);
  } catch (e) {
    return res.status(500).send();
  }
});

// TODO: Implement a route handler that gets a comment associated with the given commentID.
app.get("/posts/:postID/comments/:commentID", async (req, res) => {
  // res.send("TODO: GET /posts/{postID}/comments/{commentID}");
  const commentID = req.params.commentID;
  const collection = db.collection("comments");
  try {
    const result = await collection.findOne({ _id: new ObjectId(commentID) });
    return res.json(result);
  } catch (e) {
    return res.status(404).send(`no post found with id ${commentID}`);
  }
});

// TODO: Implement a route handler that deletes a comment associated with the given commentID.
app.delete("/posts/:postID/comments/:commentID", async (req, res) => {
  // res.send("TODO: DELETE /posts/{postID}/comments");
  const commentID = req.params.commentID;
  const collection = db.collection("comments");
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(commentID) });
    return res.json(result);
  } catch (e) {
    return res.status(404).send(`no comment found with id ${commentID}`);
  }
});

// TODO: add more endpoints here!
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
        image: "https://source.unsplash.com/9Bqiusimq6M",
        meal: "burger",
        instructions: "grill",
        rating: 8.3,
        allRatings: [8.3],
      },
    ]);
    console.log("Database seeded successfully");
  } catch (err) {
    console.log("Error seeding database:", err);
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
