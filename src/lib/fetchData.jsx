/*
----------------
Fetch all
----------------
*/

export async function fetchAllPosts() {
  try {
    const [posts, users, comments] = await Promise.all([
			fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
			fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
			fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()),
    ])

    const userMap = new Map()
    users.forEach((user) => {
      userMap.set(user.id, user)
    })

    const result = posts.map((post) => {
      const author = userMap.get(post.userId)
      const postComments = comments.filter((comment) => comment.postId === post.id)
      return {
        id: post.id,
        title: post.title,
        body: post.body.slice(0, 100).trim() + '...',
        author: author.name,
        comments: postComments.length,
      }
    })

    return result
  } catch (error) {
    throw new Error('Failed to fetch data: ' + error.message)
  }
}

/*
----------------
Fetch by ID
----------------
*/

export async function fetchSinglePost(id) {
  try {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())

    if (!post) {
      throw new Error(`Post with ID ${id} not found.`)
    }

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) => res.json())
    const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res) => res.json())

    return {
      id: post.id,
      title: post.title,
      body: post.body,
      author: user,
      comments: comments,
    }
  } catch (error) {
    throw new Error('Failed to fetch post details: ' + error.message)
  }
}