module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components/index',
          '@hooks': './src/hooks/index',
          '@features': './src/features/index',
          '@types': './src/services/types/index',
          '@svg': './src/assets/index',
          '@screens': '.src/screens/',
        },
      },
    ],
  ],
};
