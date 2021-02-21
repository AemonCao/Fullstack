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

const mostLikes = blogs => {
  var temp = []
  _.forIn(_.groupBy(blogs, item => item.author), (value, key) => {
    temp.push({ author: key, likes: value.map(a => a.likes).reduce((a, b) => a + b, 0) })
  })
  return _.maxBy(temp, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}