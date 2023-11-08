import { fetchSinglePost } from '@/lib/fetchData'
import SinglePost from '@/components/post/single-post'

export default async function Post({ params: { id } }) {

	const post = await fetchSinglePost(id)

	return (
		<SinglePost post={post} />
	)
}