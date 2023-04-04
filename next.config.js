/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: {
		UPSTASH_URL: process.env.UPSTASH_URL,
		UPSTASH_TOKEN: process.env.UPSTASH_TOKEN,
	},
}

module.exports = nextConfig
