const model = require('./post-model');

const findAllPosts = () => model.find();

const createPost = (post) => model.create(post);

const deletePost = (id) => model.deleteOne({_id: id});

const updatePost = (id, post) => model.updateOne({_id: id}, {$set: {likes: post.likes}});

const findPostsByCoords = (coords) =>
    model.find({
                   $and: [{latitude: coords.latitude}, {longitude: coords.longitude}],
               });

module.exports = {
    findAllPosts,
    createPost,
    deletePost,
    updatePost,
    findPostsByCoords
};

