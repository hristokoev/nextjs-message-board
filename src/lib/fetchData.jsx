/*
----------------
Fetch all
----------------
*/

export async function fetchAllPosts() {
  try {
    const [posts, users, comments] = await Promise.all([
			fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then((res) => res.json()),
			fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }).then((res) => res.json()),
			fetch('https://jsonplaceholder.typicode.com/comments', { cache: 'no-store' }).then((res) => res.json()),
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
        body: post.body.slice(0, 140).trim() + '...',
        author: author,
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
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' }).then((res) => res.json())
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, { cache: 'no-store' }).then((res) => res.json())
    const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, { cache: 'no-store' }).then((res) => res.json())

		if (post.id === undefined) {
			throw new Error('Failed to fetch data')
		}

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