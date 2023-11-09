import { fetchSinglePost } from '@/lib/fetchData'
import SinglePost from '@/components/post/single-post'

export async function generateMetadata( { params: { id } } ) {
	const post = await fetchSinglePost(id)

	return {
		title: `${post.title} - Board`,
		description: `${post.body.slice(0, 100)}... Read the full text on the post.`,
	}
}

export default async function Post({ params: { id } }) {

	const post = await fetchSinglePost(id)

	return (
		<SinglePost post={post} />
	)
}