const _ = require('lodash')

const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.map(blog => blog.likes).reduce((a, b) => a + b, 0)
}

const favoriteBlog = blogs => {
  // https://xiaoxiami.gitbook.io/lodash/math/maxby
  return _.maxBy(blogs, 'likes')
}

const mostBlogs = blogs => {
  var temp = []
  _.forIn(_.countBy(blogs, item => item.author), (value, key) => {
    temp.push({ author: key, blogs: value })
  })
  return _.maxBy(temp, 'blogs')
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}