import { expect } from 'chai';

const transform = (str) => {
  return require('babel-core').transform(str, {
    plugins: ['./src']
  }).code;
};

describe('Plugin', () => {
  describe('Hello', () => {
    it('World', () => {
      const code = 'const example = "Hello";';
      expect(transform(code)).to.equal('const example = "World";');
    });
  });
});
