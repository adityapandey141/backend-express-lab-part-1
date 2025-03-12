let { DataTypes, postsDB } = require("../lib/");

let posts = postsDB.define("posts", {
  title: DataTypes.TEXT,
  content: DataTypes.TEXT,
  author: DataTypes.TEXT,
});

module.exports = { posts };
