import { fetchAllPosts } from '@/lib/fetchData'
import PostItem from '@/components/home/post-item'

export const metadata = {
	title: 'Home - Board',
	description: 'Made with Next.js and Tailwind CSS',
}

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