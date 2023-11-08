export default function Comment({ comment }) {
	return (
		<li className="relative space-y-5">
			<div className="flex items-start">
				<div className="p-4 bg-slate-100 rounded-md">
					<div className="grow text-sm text-slate-800 space-y-2 mb-2" dangerouslySetInnerHTML={{ __html: comment.body }} />
					<div className="flex flex-wrap text-xs">
						<div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
							<span className="font-medium text-slate-500">
								{comment.name}
							</span>
						</div>
						<div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
							<a className="font-medium text-indigo-500 hover:text-indigo-600" href={`mailto:${comment.email.toLowerCase()}`}>
								{comment.email.toLowerCase()}
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}