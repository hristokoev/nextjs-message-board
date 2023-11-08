import { fetchAllPosts } from '@/lib/fetchData'
import PostItem from '@/components/home/post-item'

export default async function Home() {

	const posts = await fetchAllPosts()

	return (
		
		<div className="space-y-4">
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	)
}