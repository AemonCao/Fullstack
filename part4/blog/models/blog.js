const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: { type: String, minlength: 5, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  likes: { type: Number, default: 0 }
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // 将 mongoose 自带的 _id 属性格式化为字符串
    returnedObject.id = returnedObject._id.toString()
    // 删除原先的 _id 属性和 __v 属性
    delete returnedObject._id
    delete returnedObject._v
  }
})

module.exports = mongoose.model('Blog', blogSchema)