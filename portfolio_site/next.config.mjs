/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects () {
        return [
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/juan-vera-0715b325b/',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
