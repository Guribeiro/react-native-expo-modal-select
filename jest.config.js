module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
};
