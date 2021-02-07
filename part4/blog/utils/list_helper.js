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
  // todo: https://fullstackopen.com/zh/part4/%E4%BB%8E%E5%90%8E%E7%AB%AF%E7%BB%93%E6%9E%84%E5%88%B0%E6%B5%8B%E8%AF%95%E5%85%A5%E9%97%A8#exercises-4-3-4-7
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}