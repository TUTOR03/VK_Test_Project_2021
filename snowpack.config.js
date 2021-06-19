const path = require('path')

module.exports = {
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    'snowpack-plugin-svgr',
  ],
  packageOptions: {
    polyfillNode: true,
  },
  mount: {
    public: { url: '/', static: true },
    src: { url: '/build' },
  },
  optimize: {
    bundle: true,
  },
  devOptions: {
    open: 'none',
  },
  alias: {
    '@utils': path.join(__dirname, 'src/utils'),
    '@components': path.join(__dirname, 'src/components'),
    '@styles': path.join(__dirname, 'src/styles'),
    '@type': path.join(__dirname, 'src/types'),
    '@assets': path.join(__dirname, 'src/assets'),
  },
  exclude: ['**/node_modules/**/*', '**/*.test.*'],
}
