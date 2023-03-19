import * as CaseConverters from "../src/Filters/caseConverters";
import { toUpper } from "../src/Filters/caseConverters";
import { TextTransformer } from "../src";
import { toSpace } from "../src/Filters/respacer";

jest.mock('../src/Filters/respacer', () => ({
  toSpace: jest.fn((text) => "hello world")
}))

/*
 * To be able to mock the filterName property, I need to require the actual module
 * and then replace the property (and the function itself of course)
 */
jest.mock('../src/Filters/respacer', () => {
  const originalModule = jest.requireActual('../src/Filters/respacer');
  const mockedModule = {
    ...originalModule,
    toSpace: jest.fn((text) => "hello world")
  }
  mockedModule.toSpace.filterName = 'toSpace';
  return mockedModule;
})

jest.mock('../src/Filters/caseConverters', () => {
  const originalModule = jest.requireActual('../src/Filters/caseConverters');
  const mockedModule = {
    ...originalModule,
    toUpper: jest.fn((text) => "HELLO WORLD"),
    toLower: jest.fn((text) => "hello world"),
    toTitle: jest.fn((text) => "Hello World"),
    toSentence: jest.fn((text) => "Hello world"),
    toCamel: jest.fn((text) => "helloWorld"),
    toPascal: jest.fn((text) => "HelloWorld"),
    toSnake: jest.fn((text) => "hello_world"),
    toSpinal: jest.fn((text) => "hello-world"),
  }
  mockedModule.toUpper.filterName = 'toUpper';
  mockedModule.toLower.filterName = 'toLower';
  mockedModule.toTitle.filterName = 'toTitle';
  mockedModule.toSentence.filterName = 'toSentence';
  mockedModule.toCamel.filterName = 'toCamel';
  mockedModule.toPascal.filterName = 'toPascal';
  mockedModule.toSnake.filterName = 'toSnake';
  mockedModule.toSpinal.filterName = 'toSpinal';

  return mockedModule;
})

describe('TextTransformer', () => {

  describe('setText', () => {
    it('should set the text to work on', () => {

      const tt = new TextTransformer('hello-world')
      tt.setText('hello');

      expect(tt.getText()).toBe('hello')
    })

    it('should reset applied filters', () => {

      const tt = new TextTransformer('hello-world')
      tt.setText('hello');
      tt.toUpper()
      expect(tt.getAppliedFilters().length).toBe(1)

      tt.setText('world');
      expect(tt.getAppliedFilters().length).toBe(0)
    })
  })

  describe('toSpace', function () {
    it('should respace a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toSpace();

      expect(toSpace).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('hello world');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toSpace');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('hello world');
    })
  });

  describe('toUpper', function () {
    it('should UPPER a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toUpper();

      expect(CaseConverters.toUpper).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('HELLO WORLD');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toUpper');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('HELLO WORLD');
    })
  });

  describe('toLower', function () {
    it('should lower a text', () => {

      const tt = new TextTransformer('HELLO WORLD')
      tt.toLower();

      expect(CaseConverters.toLower).toHaveBeenCalledWith('HELLO WORLD')
      expect(tt.getText()).toBe('hello world');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toLower');
      expect(tt.getAppliedFilters()[0].before).toBe('HELLO WORLD');
      expect(tt.getAppliedFilters()[0].after).toBe('hello world');
    })
  });

  describe('toTitle', function () {
    it('should Title Case a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toTitle();

      expect(CaseConverters.toTitle).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('Hello World');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toTitle');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('Hello World');
    })
  });

  describe('toSentence', function () {
    it('should Sentence Case a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toSentence();

      expect(CaseConverters.toSentence).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('Hello world');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toSentence');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('Hello world');
    })
  });

  describe('toCamel', function () {
    it('should camelCase a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toCamel();

      expect(CaseConverters.toCamel).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('helloWorld');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toCamel');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('helloWorld');
    })
  });

  describe('toPascal', function () {
    it('should PascalCase a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toPascal();

      expect(CaseConverters.toPascal).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('HelloWorld');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toPascal');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('HelloWorld');
    })
  });

  describe('toSnake', function () {
    it('should snake_case a text', () => {

      const tt = new TextTransformer('hello-world')
      tt.toSnake();

      expect(CaseConverters.toSnake).toHaveBeenCalledWith('hello-world')
      expect(tt.getText()).toBe('hello_world');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toSnake');
      expect(tt.getAppliedFilters()[0].before).toBe('hello-world');
      expect(tt.getAppliedFilters()[0].after).toBe('hello_world');
    })
  });

  describe('toSpinal', function () {
    it('should spinal-case a text', () => {

      const tt = new TextTransformer('hello world')
      tt.toSpinal();

      expect(CaseConverters.toSpinal).toHaveBeenCalledWith('hello world')
      expect(tt.getText()).toBe('hello-world');
      expect(tt.getAppliedFilters().length).toBe(1);
      expect(tt.getAppliedFilters()[0].filter).toBe('toSpinal');
      expect(tt.getAppliedFilters()[0].before).toBe('hello world');
      expect(tt.getAppliedFilters()[0].after).toBe('hello-world');
    })
  });


})