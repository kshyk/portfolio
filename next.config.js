/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
    skipTrailingSlashRedirect: true,
    distDir: 'dist',
}

module.exports = nextConfig
