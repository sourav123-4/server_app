const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    // id: Number,
    // name: String,
    // username: String,
    // email: String,
    // phone: Number,
    // website: String,

    // title: {
    //     type: String,
    //     required: true
    // },
    // snippet: {
    //     type: String,
    //     required: true
    // },
    // body: {
    //     type: String,
    //     required: true
    // }

},{ timestamps : true })

const Blog = new mongoose.model('user', blogSchema);
module.exports = Blog;