'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="max-w-2xl m-auto mt-16">
			<div className="text-center px-4">
				<h1 className="font-black text-5xl mb-8">Oops!</h1>
				<div className="mb-6">There was an error loading this post. 😪</div>
				<div className="mb-6">
					<div>The server responded with the following error:</div>
					<div className="text-red-500">{error.message}</div>
				</div>
				<Link href="/" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm inline-flex items-center justify-center border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out">Back To Home</Link>
			</div>
		</div>
	)
}