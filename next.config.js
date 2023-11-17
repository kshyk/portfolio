/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
 
    // Prevent automatic `/me` -> `/me/`, instead preserve `href`
    skipTrailingSlashRedirect: true,
 
    // Change the output directory `out` -> `dist`
    distDir: 'dist',
}

module.exports = nextConfig
