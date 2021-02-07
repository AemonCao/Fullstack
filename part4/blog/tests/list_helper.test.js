const listHelper = require('../utils/list_helper')

describe('dummy', () => {
  test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  const listWithZeroBlog = []
  test('when list has only zero blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithZeroBlog)
    expect(result).toBe(0)
  })

  const listWithThreeBlog = [
    {
      likes: 500,
      title: 'Hello World!',
      author: 'Aemon Cao',
      url: 'aemon.top',
      __v: 0,
      id: '60202905fe70d82b70f95292'
    },
    {
      likes: 500,
      title: 'Hello World!',
      author: 'Aemon Cao',
      url: 'aemon.top',
      __v: 0,
      id: '60202917fe70d82b70f95293'
    },
    {
      likes: 500,
      title: 'Hello World!',
      author: 'Aemon Cao',
      url: 'aemon.top',
      __v: 0,
      id: '6020321c0f066e5a64705d42'
    }
  ]

  test('when list has only three blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithThreeBlog)
    expect(result).toBe(1500)
  })
})