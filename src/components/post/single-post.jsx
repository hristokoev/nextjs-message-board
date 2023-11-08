import Link from 'next/link'
import Comment from './comment'

export default function SinglePost({ post }) {

	const commentsLength = post.comments.length

	return (
		<div className="bg-white shadow-md rounded border border-slate-200 p-5">
			<div className="mb-2">
				<ul className="inline-flex flex-wrap text-sm font-medium">
					<li className="flex items-center">
						<Link className="text-slate-500 hover:text-indigo-500" href="/home">
							Home
						</Link>
						<svg className="h-4 w-4 fill-current text-slate-400 mx-2" viewBox="0 0 16 16">
							<path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
						</svg>
					</li>
					<li className="flex items-center">
						<span className="text-slate-500">
							Discussion
						</span>
					</li>
				</ul>
			</div>
			<div className="pb-4">
				<div className="flex items-start space-x-3 mb-3">
					<h2 className="text-2xl text-slate-800 font-bold">{post.title}</h2>
				</div>
				<div className="flex flex-wrap text-sm">
					<div className="flex items-center space-x-1 after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
						<span className="text-slate-500">{post.author.name}&nbsp;-</span>
						<span className="font-medium text-indigo-500">
							@{post.author.username}
						</span>
					</div>
					<div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
						<span className="text-slate-500">{commentsLength > 1 ? `${commentsLength} Comments` : `${commentsLength} Comment`}</span>
					</div>
				</div>
			</div>
			{/* <div dangerouslySetInnerHTML={{ __html: post.body }} className="mb-6" /> */}
			<div className="mt-4">
				<h3 className="font-semibold text-slate-800 mb-4">{commentsLength > 1 ? `${commentsLength} Comments` : `${commentsLength} Comment`}</h3>
				<ul className="space-y-5">
					{post.comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</ul>
			</div>
		</div>
	)
}
