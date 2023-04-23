import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns :["<rootDir>/cypress/"],
  preset : 'ts-jest',
  moduleNameMapper:{
    "^@/src/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ['jest-plugin-context/setup','<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

export default createJestConfig(config)