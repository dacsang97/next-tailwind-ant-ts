const less = require('@zeit/next-less')
const css = require('@zeit/next-css')

module.exports = css(
  less({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  })
)
