let express = require("express");

let postRoute = express.Router();
let { postsDB } = require("./lib/index");
let { posts } = require("./models/post.model");
let { postData } = require("./dataset/postData");

postRoute.use(express.json());

async function getAll() {
  let result = await posts.findAll();
  return { posts: result };
}
postRoute.get("/", async (req, res) => {
  try {
    let response = await getAll();
    if (response.posts.length === 0) {
      return res.status(404).json({ message: "No posts found !" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

postRoute.get("/seed", async (req, res) => {
  try {
    await postsDB.sync({ force: true });
    await posts.bulkCreate(postData);
    return res.status(200).json({ message: "Database seeding successfully !" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Database seeding failed !", error: error.message });
  }
});

async function addNewPost(newData) {
  let newPost = await posts.create(newData);
  return { newPost };
}
postRoute.post("/new", async (req, res) => {
  try {
    let newData = req.body.newPost;
    let result = await addNewPost(newData);
    return res.status(200).json({ message: "New post added !", result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function updatePost(id, data) {
  let postDetails = await posts.findOne({ where: { id } });
  if (!postDetails) {
    return {};
  }
  postDetails.set(data);
  let updatedPost = await postDetails.save();

  return { message: "Post Updated !", updatedPost };
}

postRoute.post("/update/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let data = req.body;
    let result = await updatePost(id, data);
    if (!result.message) {
      return res.status(404).json({ message: "Post not found !" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function deletePostById(id) {
  let postDetails = await posts.destroy({ where: { id } });
  if (!postDetails) {
    return {};
  }

  return { message: "post deleted !" };
}
postRoute.post("/delete", async (req, res) => {
  try {
    let id = parseInt(req.body.id);
    let result = await deletePostById(id);
    if (!result.message) {
      return res.status(404).json({ message: "Post not found!" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = postRoute;
