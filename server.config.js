// Server configuration for text compression
export default {
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/**': {
        headers: {
          'Content-Encoding': 'gzip',
          'Vary': 'Accept-Encoding'
        }
      }
    }
  }
}
