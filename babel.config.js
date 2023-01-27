module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/typescript',
  ],
  env: {
    production: {
      plugins: [
        ['babel-plugin-styled-components', { displayName: false }],
      ],
    },
    development: {
      plugins: [
        ['react-refresh/babel'],
      ],
    },
  },
};
