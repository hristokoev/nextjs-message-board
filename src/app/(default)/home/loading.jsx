import PostItemLoading from '@/components/home/post-item-loading'

export default async function LoadingHome() {
	return (
		<div className="space-y-4">
			{[...Array(8)].map((e, i) => (
				<PostItemLoading key={i} />
			))}
		</div>
	)
}