module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/streamer/' : '/',
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'streamer',
    },
  },
}
