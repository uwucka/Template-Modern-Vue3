export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
    // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig/#examples
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: { importHelpers: true }
      }
    ]
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue'],
  moduleNameMapper: {
    // Fix in order for vue-test-utils to work with Jest 28
    // https://github.com/vuejs/vue-test-utils/issues/1975
    '^@vue/test-utils$': require.resolve('@vue/test-utils'),
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['text', 'json-summary'],
  testPathIgnorePatterns: ['/node_modules/']
}
