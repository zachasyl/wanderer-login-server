const dao = require('../posts/posts-dao.js');
module.exports = (app) => {

    const findAllPosts = (req, res) =>
        dao.findAllPosts()
            .then(posts => res.json(posts));

    app.get('/api/posts', findAllPosts);

    const createPost = (req, res) => {
        const newPost = {
            "likes" : 0,
            ...req.body
        }
        dao.createPost(newPost)
            .then((insertedPost) => res.json(insertedPost));

    }
    app.post('/api/posts', createPost);


    const deletePost = (req, res) => {
        dao.deletePost(req.params.id).then(status => res.send(status));
    }
    app.delete('/api/posts/:id', deletePost);


    const likePost = (req, res) => {
        let post = req.body;
        if (post.liked === true) {
            post.liked = false;
            post.likes--;
        } else {
            post.liked = true;
            post.likes++;
        }
        dao.updatePost(req.params.id, post)
            .then(status => res.send(status));
    }
    app.put('/api/posts/:id/like', likePost);
};
