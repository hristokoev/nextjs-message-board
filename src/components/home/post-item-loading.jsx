
export default function PostItemLoading() {
	return (
		<>
			<div className="p-5 bg-white shadow-md rounded border border-slate-200 animate-pulse">
				<div className="flex mb-3">
					<div className="flex space-x-1">
						<div className="w-24 h-4 bg-slate-200"></div>
						<div className="w-12 h-4 bg-slate-200"></div>
					</div>
				</div>
				<div className="flex flex-col space-y-1 mb-3">
					<div className="w-9/12 h-4 bg-slate-200"></div>
					<div className="w-6/12 h-4 bg-slate-200"></div>
				</div>
				<div className="w-24 h-4 bg-slate-200"></div>
			</div>
		</>
	)
}