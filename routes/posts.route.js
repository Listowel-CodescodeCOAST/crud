const { Router } = require("express")
const {
    createPost,
    deletePost,
    getSinglePost,
    getAllPosts,
    updatePost,
} = require("../controllers/posts.controller")

const postRoutre = Router();

postRoutre
        .route("/")
        .get(getAllPosts)
        .post(createPost);

postRoutre
        .route("/:postId")
        .get(getSinglePost)
        .patch(updatePost)
        .delete(deletePost);

module.exports = postRoutre;