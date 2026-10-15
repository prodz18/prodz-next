import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Allow the local preview to hydrate when opened through a loopback or LAN IP.
	allowedDevOrigins: ['127.0.0.1', '192.168.0.37'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
			},
		],
	},
};

export default nextConfig;
