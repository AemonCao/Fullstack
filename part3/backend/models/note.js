const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: { type: String, minlength: 5, required: true },
  date: { type: Date, require: true },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (documnet, returnedObject) => {
    // 将 mongoose 自带的 _id 属性格式化为字符串
    returnedObject.id = returnedObject._id.toString()
    // 删除原先的 _id 属性和 __v 属性
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Note', noteSchema)
