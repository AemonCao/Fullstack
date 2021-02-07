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
      likes: 5,
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra'
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
      likes: 100,
      title: 'Hello World!',
      author: 'Aemon Cao',
    },
    {
      likes: 200,
      title: 'Hello World!',
      author: 'Aemon Cao',
    },
    {
      likes: 300,
      title: 'Hello World!',
      author: 'Aemon Cao',
    }
  ]

  test('when list has three blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithThreeBlog)
    expect(result).toBe(600)
  })
})

describe('favorite blog', () => {
  const listWithThreeBlog = [
    {
      likes: 100,
      title: 'Hello World!',
      author: 'Aemon Cao',
    },
    {
      likes: 200,
      title: 'Hello World!',
      author: 'Aemon Cao',
    },
    {
      likes: 300,
      title: 'Hello World!',
      author: 'Aemon Cao',
    }
  ]

  test('when list has three blog, equals the favorite blog ', () => {
    const result = listHelper.favoriteBlog(listWithThreeBlog)
    expect(result).toEqual({ likes: 300, title: 'Hello World!', author: 'Aemon Cao', })
  })
})