
import Link from 'next/link'

export default function PostItem({ post }) {
	return (
		<>
			<Link
				className="block p-5 bg-white hover:bg-slate-100/25 shadow-md rounded border border-slate-200 hover:border-indigo-500 transition-all duration-150"
				href={`/post/${post.id}`}
			>
				<div className="flex justify-between mb-3">
					<div className="flex">
						<div className="flex space-x-1 leading-tight">
							<span className="text-sm font-semibold text-slate-800">
								{post.author.name}
							</span>
							<span className="text-sm text-indigo-500">@{post.author.username}</span>
						</div>
					</div>
				</div>
				<div className="text-sm text-slate-800 space-y-2 mb-5">
					<p>
						{post.body}
					</p>
				</div>
				<div className="flex items-center">
					<div className="flex items-center text-slate-400 hover:text-indigo-500 transition-all duration-150">
						<svg className="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
							<path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
						</svg>
						<div className="text-sm">{post.comments > 1 ? `${post.comments} Comments` : `${post.comments} Comment`}</div>
					</div>
				</div>
			</Link>
		</>
	)
}