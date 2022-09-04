const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url)
  .then((result) => {
    console.log('connecting to', url);
  })
  .catch((error) => {
    console.log('error connecting to mongoDB', error.message);
  })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog