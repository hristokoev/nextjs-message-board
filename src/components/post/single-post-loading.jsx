export default function SinglePostLoading() {

	return (
		<div className="bg-white shadow-md rounded border border-slate-200 p-5 animate-pulse">
			<div className="mb-2">
				<div className="flex space-x-2">
					<div className="w-24 h-4 bg-slate-200"></div>
					<div className="w-12 h-4 bg-slate-200"></div>
				</div>
			</div>
			<div className="pb-4">
				<div className="w-36 md:w-96 h-8 bg-slate-300 mb-3"></div>
				<div className="flex flex-wrap text-sm">
					<div className="flex items-center after:px-2">
						<div className="w-18 h-4 bg-slate-200"></div>
						<div className="w-12 h-4 bg-slate-200"></div>
					</div>
					<div className="w-24 h-4 bg-slate-200"></div>
				</div>
			</div>
			<div className="flex flex-col space-y-2">
				<div className="w-9/12 h-6 bg-slate-200"></div>
				<div className="w-10/12 h-6 bg-slate-200"></div>
				<div className="w-8/12 h-6 bg-slate-200"></div>
			</div>
			<div className="mt-4">
				<div className="w-36 h-6 bg-slate-200 mb-4"></div>
				<div className="space-y-5">
						<div className="w-full h-12 bg-slate-100 rounded-md"></div>
						<div className="w-full h-12 bg-slate-100 rounded-md"></div>
						<div className="w-full h-12 bg-slate-100 rounded-md"></div>
						<div className="w-full h-12 bg-slate-100 rounded-md"></div>
						<div className="w-full h-12 bg-slate-100 rounded-md"></div>
				</div>
			</div>
		</div>
	)
}
