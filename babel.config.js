module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/env', '@babel/react', 'eslint-plugin-flowtype', 'flow'],
    plugins: [],
    retainLines: true
  };
};
