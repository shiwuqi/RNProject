module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true }
    ],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
        alias: {
          '@': './src'
        }
      }
    ]
  ]
};