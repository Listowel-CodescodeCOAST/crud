const express = require("express");
const { dbConnect } = require ("./config/dbConnect")
const postRoutre = require("./routes/posts.route");

const app = express();

app.use(express.json());

app.use("/", postRoutre);

const start = async () => {
    await dbConnect();

app.listen(4000, () => {
    console.log("Srever up and running");
});
};

start();