'use strict';

module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.(test|spec).ts'],
  globals: {
    'ts-jest': {
      transpileOnly: true,
      isolatedModules: true,
    },
  },
};
