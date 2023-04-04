import { redis } from '~/lib/upstash.server'

export const metadata = {
	title: 'Welcome to noxy-next!',
}
const InitCount = async () => {
	const result = await redis.incr('count-value')
	return result
}
export default async function Home() {
	const count = await InitCount()

	return (
		<main className="container flex flex-col items-center justify-between h-full max-w-xl mx-auto space-y-3">
			<section className='flex flex-col items-center justify-center min-h-screen p-1 space-y-4'>
				<h2 className="text-4xl text-center">Next 13 + Upstash = ❤</h2>
				<p className='text-lg xl:text-xl'>Cantidad de veces vistas: <span className='text-blue-500'>{count}</span></p>
			</section>
			<footer className="p-5">
				Powered by <span className='text-blue-500'>NextJS 💙</span>
			</footer>
		</main>
	)
}
