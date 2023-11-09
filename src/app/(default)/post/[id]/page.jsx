import { fetchSinglePost } from '@/lib/fetchData'
import SinglePost from '@/components/post/single-post'

export const metadata = {
	title: 'Post - Board',
	description: 'Made with Next.js and Tailwind CSS',
}

export default async function Post({ params: { id } }) {

	const post = await fetchSinglePost(id)

	return (
		<SinglePost post={post} />
	)
}