import { fetchSinglePost } from "@/lib/fetchData"

export default async function Post({ params: { id }}) {

	const post = await fetchSinglePost(id)

	return (
		<div>
			<pre>{JSON.stringify(post, null, 2)}</pre>
		</div>
	)
}