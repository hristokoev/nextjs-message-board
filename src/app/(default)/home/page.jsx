import { fetchAllPosts } from '@/lib/fetchData'

export default async function Home() {

	const posts = await fetchAllPosts()

	return (
		<div>
			<pre>{JSON.stringify(posts, null, 2)}</pre>
		</div>
	)
}