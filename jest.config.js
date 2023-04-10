// Next.js jest test를 위한 기본구성
const nextJest = require('next/jest');

// 대상이 되는 dir 변경
const createJestConfig = nextJest({
  dir: './',
});

//
/** @type {import('jest').Config} */
const customJestConfig = {
  // jest가 찾아올 구성의 경로
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // 테스트를 위한 jest dom 환경 구성
  testEnvironment: 'jest-environment-jsdom',
};

// yarn jest에서 사용되는 Jest 구성 객체
module.exports = createJestConfig(customJestConfig);
