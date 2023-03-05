import * as CaseConverters from "../../src/Filters/caseConverters";

describe('CaseConverters', () => {

  describe('toUpper', function () {
    test('AnYtHIng -> UPPER CASE', () => {
      expect(CaseConverters.toUpper('HEllo WorlD')).toBe('HELLO WORLD');
    });
  })

  describe('toLower', () => {
    test('AnYtHIng -> lower case', () => {
      expect(CaseConverters.toLower('HEllo WorlD')).toBe('hello world');
    });
  })

  describe('toTitle', () => {
    test('spaces -> Title Case', () => {
      expect(CaseConverters.toTitle('hello world')).toBe('Hello World');
    });

    test('UPPER CASE -> Title Case', () => {
      expect(CaseConverters.toTitle('HELLO WORLD')).toBe('Hello World');
    })

    test('lower case -> Title Case', () => {
      expect(CaseConverters.toTitle('hello world')).toBe('Hello World');
    })

    test('Title Case -> Title Case', () => {
      expect(CaseConverters.toTitle('Hello World')).toBe('Hello World');
    })

    test('Sentence case -> Title Case', () => {
      expect(CaseConverters.toTitle('Hello world')).toBe('Hello World');
    });

    test('camelCase -> Title Case', () => {
      expect(CaseConverters.toTitle('helloWorld')).toBe('Hello World');
    });

    test('PascalCase -> Title Case', () => {
      expect(CaseConverters.toTitle('HelloWorld')).toBe('Hello World');
    });

    test('snake_case -> Title Case', () => {
      expect(CaseConverters.toTitle('Hello_World')).toBe('Hello World');
    });

    test('spinal-case -> Title Case', () => {
      expect(CaseConverters.toTitle('Hello-World')).toBe('Hello World');
    });
  })

  describe('toSentence', () => {
    test('UPPER CASE -> Sentence case', () => {
      expect(CaseConverters.toSentence('HELLO WORLD')).toBe('Hello world');
    });

    test('lower case -> Sentence case', () => {
      expect(CaseConverters.toSentence('hello world')).toBe('Hello world');
    });

    test('Title Case -> Sentence case', () => {
      expect(CaseConverters.toSentence('Hello World')).toBe('Hello world');
    });

    test('Sentence Case -> Sentence case', () => {
      expect(CaseConverters.toSentence('Hello world')).toBe('Hello world');
    });

    test('camelCase -> Sentence case', () => {
      expect(CaseConverters.toSentence('helloWorld')).toBe('Hello world');
    });

    test('PascalCase -> Sentence case', () => {
      expect(CaseConverters.toSentence('HelloWorld')).toBe('Hello world');
    });

    test('snake_case -> Sentence case', () => {
      expect(CaseConverters.toSentence('Hello_World')).toBe('Hello world');
    });

    test('spinal-case -> Sentence case', () => {
      expect(CaseConverters.toSentence('Hello-World')).toBe('Hello world');
    });

  })

  describe('toCamel', () => {
    test('UPPER CASE -> camelCase', () => {
      expect(CaseConverters.toCamel('HELLO WORLD')).toBe('helloWorld');
    });

    test('lower case -> camelCase', () => {
      expect(CaseConverters.toCamel('hello world')).toBe('helloWorld');
    });

    test('Title Case -> camelCase', () => {
      expect(CaseConverters.toCamel('Hello World')).toBe('helloWorld');
    });

    test('Sentence Case -> camelCase', () => {
      expect(CaseConverters.toCamel('Hello world')).toBe('helloWorld');
    });

    test('camelCase -> camelCase', () => {
      expect(CaseConverters.toCamel('helloWorld')).toBe('helloWorld');
    });

    test('PascalCase -> camelCase', () => {
      expect(CaseConverters.toCamel('HelloWorld')).toBe('helloWorld');
    });

    test('snake_case -> camelCase', () => {
      expect(CaseConverters.toCamel('Hello_World')).toBe('helloWorld');
    });

    test('spinal-case -> camelCase', () => {
      expect(CaseConverters.toCamel('Hello-World')).toBe('helloWorld');
    });

  })

  describe('toPascal', () => {
    test('UPPER CASE -> PascalCase', () => {
      expect(CaseConverters.toPascal('HELLO WORLD')).toBe('HelloWorld');
    });

    test('lower case -> PascalCase', () => {
      expect(CaseConverters.toPascal('hello world')).toBe('HelloWorld');
    });

    test('Title Case -> PascalCase', () => {
      expect(CaseConverters.toPascal('Hello World')).toBe('HelloWorld');
    });

    test('Sentence Case -> PascalCase', () => {
      expect(CaseConverters.toPascal('Hello world')).toBe('HelloWorld');
    });

    test('camelCase -> PascalCase', () => {
      expect(CaseConverters.toPascal('helloWorld')).toBe('HelloWorld');
    });

    test('PascalCase -> PascalCase', () => {
      expect(CaseConverters.toPascal('HelloWorld')).toBe('HelloWorld');
    });

    test('snake_case -> PascalCase', () => {
      expect(CaseConverters.toPascal('Hello_World')).toBe('HelloWorld');
    });

    test('spinal-case -> PascalCase', () => {
      expect(CaseConverters.toPascal('Hello-World')).toBe('HelloWorld');
    });

  })

  describe('toSnake', () => {
    test('UPPER CASE -> snake_case', () => {
      expect(CaseConverters.toSnake('HELLO WORLD')).toBe('hello_world');
    });

    test('lower case -> snake_case', () => {
      expect(CaseConverters.toSnake('hello world')).toBe('hello_world');
    });

    test('Title Case -> snake_case', () => {
      expect(CaseConverters.toSnake('Hello World')).toBe('hello_world');
    });

    test('Sentence Case -> snake_case', () => {
      expect(CaseConverters.toSnake('Hello world')).toBe('hello_world');
    });

    test('camelCase -> snake_case', () => {
      expect(CaseConverters.toSnake('helloWorld')).toBe('hello_world');
    });

    test('PascalCase -> snake_case', () => {
      expect(CaseConverters.toSnake('HelloWorld')).toBe('hello_world');
    });

    test('snake_case -> snake_case', () => {
      expect(CaseConverters.toSnake('Hello_World')).toBe('hello_world');
    });

    test('spinal-case -> snake_case', () => {
      expect(CaseConverters.toSnake('Hello-World')).toBe('hello_world');
    });

  })

  describe('toSpinal', () => {
    test('UPPER CASE -> spinal-case', () => {
      expect(CaseConverters.toSpinal('HELLO WORLD')).toBe('hello-world');
    });

    test('lower case -> spinal-case', () => {
      expect(CaseConverters.toSpinal('hello world')).toBe('hello-world');
    });

    test('Title Case -> spinal-case', () => {
      expect(CaseConverters.toSpinal('Hello World')).toBe('hello-world');
    });

    test('Sentence Case -> spinal-case', () => {
      expect(CaseConverters.toSpinal('Hello world')).toBe('hello-world');
    });

    test('camelCase -> spinal-case', () => {
      expect(CaseConverters.toSpinal('helloWorld')).toBe('hello-world');
    });

    test('PascalCase -> spinal-case', () => {
      expect(CaseConverters.toSpinal('HelloWorld')).toBe('hello-world');
    });

    test('snake_case -> spinal-case', () => {
      expect(CaseConverters.toSpinal('Hello_World')).toBe('hello-world');
    });

    test('spinal-case -> spinal-case', () => {
      expect(CaseConverters.toSpinal('Hello-World')).toBe('hello-world');
    });

  })
})