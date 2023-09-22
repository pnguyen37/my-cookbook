"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config(".env");
const app = (0, express_1.default)();
const port = 8080; // Default port to listen on.
let db;
// Middleware.
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
// ====================================================================
// Routes
// ====================================================================
// TODO: Implement a route handler that returns a list of all posts, ordered by date created.
app.get("/recipes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = db.collection("recipes");
    const result = yield collection.find({}).toArray();
    return res.json(result);
}));
// TODO: Implement a route handler that creates a new post.
app.post("/recipes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postBodyData = req.body;
    const collection = db.collection("recipes");
    const newPost = {
        image: postBodyData.image,
        meal: postBodyData.meal,
        instructions: postBodyData.instructions,
        rating: postBodyData.rating,
    };
    try {
        yield collection.insertOne(newPost);
        return res.json(newPost);
    }
    catch (e) {
        return res.status(500).send();
    }
}));
app.get("/recipes/:meal", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const meal = req.params.meal;
    const collection = db.collection("recipes");
    try {
        const result = yield collection.find({ meal }).toArray();
        return res.json(result);
    }
    catch (e) {
        return res.status(404).send(`no recipe found with name ${meal}`);
    }
}));
app.get("/ratings", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = db.collection("recipes");
    try {
        const result = yield collection.find({}).sort({ rating: -1 }).toArray();
        return res.json(result);
    }
    catch (e) {
        return res.status(404).send("could not sort ratings");
    }
}));
app.patch("/recipes/:recipeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipeID = req.params.recipeID;
    const newRating = parseFloat(req.body.rating);
    const collection = db.collection("recipes");
    try {
        const id = new mongodb_1.ObjectId(recipeID);
        const recipe = yield collection.findOne({ _id: id });
        recipe.allRatings.push(newRating);
        const totalRatings = recipe.allRatings.length;
        const sumOfRatings = recipe.allRatings.reduce((acc, rating) => acc + rating, 0);
        const newAverageRating = sumOfRatings / totalRatings;
        const updateRecipe = yield collection.updateOne({ _id: id }, { $set: { rating: newAverageRating, allRatings: recipe.allRatings } });
        return res.json(updateRecipe);
    }
    catch (e) {
        return res.status(404).send(`no recipe found with id ${recipeID}`);
    }
}));
app.patch("/recipes/:recipeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipeID = req.params.recipeID;
    const isLiked = parseFloat(req.body.liked);
    const collection = db.collection("recipes");
    try {
        const result = yield collection.updateOne({ _id: new mongodb_1.ObjectId(recipeID) }, { $set: { liked: isLiked } });
        return res.json(result);
    }
    catch (e) {
        return res.status(404).send(`no course found with id ${recipeID}`);
    }
}));
// TODO: Implement a route handler that deletes the post associated with a given postID.
app.delete("/posts/:postID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("TODO: DELETE /posts/{postID}");
    const postID = req.params.postID;
    const collection = db.collection("posts");
    try {
        const result = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(postID) });
        return res.json(result);
    }
    catch (e) {
        return res.status(404).send(`no post found with id ${postID}`);
    }
}));
// TODO: Implement a route handler that gets all the comments associated with a given postID.
app.get("/posts/:postID/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("TODO: GET /posts/{postID}/comments");
    const postID = req.params.postID;
    const collection = db.collection("comments");
    try {
        const result = yield collection
            .find({ post: new mongodb_1.ObjectId(postID) })
            .toArray();
        return res.json(result);
    }
    catch (e) {
        return res
            .status(404)
            .send(`no comments for the post found with id ${postID}`);
    }
}));
// TODO: Implement a route handler that gets adds a comment to the post with the given postID.
app.post("/posts/:postID/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("TODO: POST /posts/{postID}/comments");
    const postID = req.params.postID;
    const postBodyData = req.body;
    const collection = db.collection("comments");
    const newComment = {
        content: postBodyData.content,
        post: new mongodb_1.ObjectId(postID),
        createdAt: new Date(),
    };
    try {
        yield collection.insertOne(newComment);
        return res.json(newComment);
    }
    catch (e) {
        return res.status(500).send();
    }
}));
// TODO: Implement a route handler that gets a comment associated with the given commentID.
app.get("/posts/:postID/comments/:commentID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("TODO: GET /posts/{postID}/comments/{commentID}");
    const commentID = req.params.commentID;
    const collection = db.collection("comments");
    try {
        const result = yield collection.findOne({ _id: new mongodb_1.ObjectId(commentID) });
        return res.json(result);
    }
    catch (e) {
        return res.status(404).send(`no post found with id ${commentID}`);
    }
}));
// TODO: Implement a route handler that deletes a comment associated with the given commentID.
app.delete("/posts/:postID/comments/:commentID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("TODO: DELETE /posts/{postID}/comments");
    const commentID = req.params.commentID;
    const collection = db.collection("comments");
    try {
        const result = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(commentID) });
        return res.json(result);
    }
    catch (e) {
        return res.status(404).send(`no comment found with id ${commentID}`);
    }
}));
// TODO: add more endpoints here!
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const collection = db.collection("recipes");
            yield collection.deleteMany({});
            yield collection.insertMany([
                {
                    image: "https://source.unsplash.com/08aic3qPcag",
                    meal: "pho",
                    instructions: "cook",
                    rating: 9.7,
                    allRatings: [9.7],
                    liked: false,
                },
                {
                    image: "https://source.unsplash.com/U4vWk_DXOT4",
                    meal: "fries",
                    instructions: "fry",
                    rating: 9,
                    allRatings: [9],
                    liked: false,
                },
                {
                    image: "https://source.unsplash.com/pJbahi1QEFc",
                    meal: "pad thai",
                    instructions: "cook",
                    rating: 9.5,
                    allRatings: [9.5],
                    liked: false,
                },
                {
                    image: "https://source.unsplash.com/z_PfaGzeN9E",
                    meal: "tacos",
                    instructions: "cook",
                    rating: 9.4,
                    allRatings: [9.3],
                    liked: false,
                },
                {
                    image: "https://source.unsplash.com/9Bqiusimq6M",
                    meal: "burger",
                    instructions: "grill",
                    rating: 8.3,
                    allRatings: [8.3],
                    liked: false,
                },
            ]);
            console.log("Database seeded successfully");
        }
        catch (err) {
            console.log("Error seeding database:", err);
        }
    });
}
// Start the Express server.
function start() {
    const client = new mongodb_1.MongoClient(process.env.ATLAS_URI);
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
//# sourceMappingURL=index.js.map