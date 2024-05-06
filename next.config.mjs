import MillionLint from '@million/lint'
import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

/** @type {import('next').NextConfig} */
export default MillionLint.next({
    rsc: true,
})(
    MillionLint.next(nextConfig, {
        rsc: true,
    })
)
