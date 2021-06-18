const path = require('path')

module.exports = {
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv'
  ],
  packageOptions: {
    polyfillNode: true,
  },
  mount: {
    "public": {url: "/", static: true, resolve: false},
    "src": {url: "/build"}
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
  },
  exclude: ['**/node_modules/**/*', '**/*.test.*'],
}
