import Link from 'next/link'

export default async function NotFound() {
	return (
		<div className="max-w-2xl m-auto mt-16">
			<div className="text-center px-4">
				<h1 className="font-black text-5xl mb-8">404</h1>
				<div className="mb-6">Oops! This page could not be found. 😪</div>
				<Link href="/" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm inline-flex items-center justify-center border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out">Back To Home</Link>
			</div>
		</div>
	)
}