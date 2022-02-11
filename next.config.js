/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['localhost', 'picsum.photos', 'i.picsum.photos'],
	},
}

module.exports = nextConfig
