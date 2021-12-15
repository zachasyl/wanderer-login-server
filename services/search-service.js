// let posts = require("../data/posts.json");
const post_dao = require("../posts/post-dao");

module.exports = (app) => {
  const findPosts = (req, res) => {
    post_dao.findPostsByCoords(req.body).then((posts) => res.json(posts));
  };

  app.post("/api/search", findPosts);
};
