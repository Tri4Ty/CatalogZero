const path = require('path');

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  alias: {
    theme: path.resolve(__dirname, './src/newTheme.js')
    // IMPORTANT : Remember to map every alias to .flowconfig too!
  },
  extensions: ['.js', '.jsx', '.json'],
  modules: [path.join(__dirname, 'app'), 'node_modules'],
};