import {TextTransformer} from "../src/TextTransformer";

describe('TextTransformer', () => {
  it('should chain transformations', () => {
    const tt = new TextTransformer('helloWorld')

    tt
      .toSpace()
      .toUpper()
      .toLower()
      .toTitle()
      .toSentence()
      .toCamel()
      .toPascal()
      .toSnake()
      .toSpinal()
      .toSpace()

    expect(tt.getText()).toBe('hello world')

    expect(tt.getAppliedFilters().length).toBe(10);

    expect(tt.getAppliedFilters()[0].filter).toBe('toSpace');
    expect(tt.getAppliedFilters()[0].before).toBe('helloWorld');
    expect(tt.getAppliedFilters()[0].after).toBe('hello World');

    expect(tt.getAppliedFilters()[1].filter).toBe('toUpper');
    expect(tt.getAppliedFilters()[1].before).toBe('hello World');
    expect(tt.getAppliedFilters()[1].after).toBe('HELLO WORLD');

    expect(tt.getAppliedFilters()[2].filter).toBe('toLower');
    expect(tt.getAppliedFilters()[2].before).toBe('HELLO WORLD');
    expect(tt.getAppliedFilters()[2].after).toBe('hello world');

    expect(tt.getAppliedFilters()[3].filter).toBe('toTitle');
    expect(tt.getAppliedFilters()[3].before).toBe('hello world');
    expect(tt.getAppliedFilters()[3].after).toBe('Hello World');

    expect(tt.getAppliedFilters()[4].filter).toBe('toSentence');
    expect(tt.getAppliedFilters()[4].before).toBe('Hello World');
    expect(tt.getAppliedFilters()[4].after).toBe('Hello world');

    expect(tt.getAppliedFilters()[5].filter).toBe('toCamel');
    expect(tt.getAppliedFilters()[5].before).toBe('Hello world');
    expect(tt.getAppliedFilters()[5].after).toBe('helloWorld');

    expect(tt.getAppliedFilters()[6].filter).toBe('toPascal');
    expect(tt.getAppliedFilters()[6].before).toBe('helloWorld');
    expect(tt.getAppliedFilters()[6].after).toBe('HelloWorld');

    expect(tt.getAppliedFilters()[7].filter).toBe('toSnake');
    expect(tt.getAppliedFilters()[7].before).toBe('HelloWorld');
    expect(tt.getAppliedFilters()[7].after).toBe('hello_world');

    expect(tt.getAppliedFilters()[8].filter).toBe('toSpinal');
    expect(tt.getAppliedFilters()[8].before).toBe('hello_world');
    expect(tt.getAppliedFilters()[8].after).toBe('hello-world');

    expect(tt.getAppliedFilters()[9].filter).toBe('toSpace');
    expect(tt.getAppliedFilters()[9].before).toBe('hello-world');
    expect(tt.getAppliedFilters()[9].after).toBe('hello world');

  })
  describe('getLastFilter', () => {
    it('should return last filter', () => {
      const tt = new TextTransformer('helloWorld')
      tt
          .toSpace()
          .toUpper()

      let lastFilter = tt.getLastFilter();
      expect(lastFilter.filter).toBe('toUpper');
      expect(lastFilter.before).toBe('hello World');
      expect(lastFilter.after).toBe('HELLO WORLD');
    })
  })
})