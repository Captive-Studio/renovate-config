/* eslint-disable global-require */
module.exports = {
  callback() {
    // console.log('done')
  },
  transforms: {
    PKG_JSON: require('markdown-magic-package-json'),
    SUB_PACKAGE_LIST: require('markdown-magic-subpackage-list'),
  },
};
