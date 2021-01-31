module.expots = {
    async rewrites() {
        return [
            {
                source: '/source/:path/*', // wildcard
                destination: '/destination/:path/*'
            },
        ];
    },
}