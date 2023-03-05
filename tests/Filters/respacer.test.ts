import {toSpace} from "../../src/Filters/respacer";

describe('Respacer', () => {
  describe('toSpace', function () {

    test('lower -> spaces (no change)', () => {
      expect(toSpace('hello world')).toBe('hello world')
    })

    test('UPPER -> spaces (no change)', () => {
      expect(toSpace('HELLO WORLD')).toBe('HELLO WORLD')
    })

    test('MixEd -> spaces (no change)', () => {
      expect(toSpace('HeLlO WoRlD')).toBe('HeLlO WoRlD')
    })

    test('Title Case -> spaces (no change)', () => {
      expect(toSpace('Hello World')).toBe('Hello World')
    })

    test('Sentence case -> spaces (no change)', () => {
      expect(toSpace('Hello world')).toBe('Hello world')
    })

    test('camelCase -> spaces', () => {
      expect(toSpace('helloWorld')).toBe('hello World')
    })

    test('PascalCase -> spaces', () => {
      expect(toSpace('HelloWorld')).toBe('Hello World')
    })

    test('snake_case -> spaces', () => {
      expect(toSpace('hello_world')).toBe('hello world')
    })

    test('spinal-case -> spaces', () => {
      expect(toSpace('hello-world')).toBe('hello world')
    })

  });
})