/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
module.exports = {
  callback() {
    // console.log('done')
  },
  transforms: {
    PKGJSON: require('markdown-magic-package-json'),
    SUBPACKAGELIST: require('markdown-magic-subpackage-list'),
  },
};
