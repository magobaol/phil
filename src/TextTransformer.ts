import * as CaseConverters from './Filters/caseConverters'
import { Filter } from './Filters/filter'
import { toSpace } from './Filters/respacer';
import { AppliedFilter } from "./Filters/appliedFilter";

export class TextTransformer {
  private appliedFilters: AppliedFilter[] = [];
  private text: string;
  constructor(text: string) {
    this.text = text
  }

  private resetAppliedFilters() {
    this.appliedFilters = [];
  }

  private apply(filter: Filter) {
    const before = this.text
    const after = this.text = filter(this.text)
    const filterName = filter.name
    this.appliedFilters.push({
      filter: filterName,
      before,
      after
    })
  }

  public getAppliedFilters() {
    return this.appliedFilters;
  }

  public setText(text: string) {
    this.text = text
    this.resetAppliedFilters();
    return this;
  }

  getText() {
    return this.text
  }

  getLastFilter() {
    return this.appliedFilters[this.appliedFilters.length-1];
  }

  public toSpace() {
    this.apply(toSpace)
    return this
  }

  public toUpper() {
    this.apply(CaseConverters.toUpper)
    return this
  }

  public toLower() {
    this.apply(CaseConverters.toLower)
    return this
  }

  public toTitle() {
    this.apply(CaseConverters.toTitle)
    return this
  }

  public toSentence() {
    this.apply(CaseConverters.toSentence)
    return this
  }

  public toCamel() {
    this.apply(CaseConverters.toCamel)
    return this
  }

  public toPascal() {
    this.apply(CaseConverters.toPascal)
    return this
  }

  public toSnake() {
    this.apply(CaseConverters.toSnake)
    return this
  }

  public toSpinal() {
    this.apply(CaseConverters.toSpinal)
    return this
  }

  public getAlfredItem() {
    let lastFilter = this.getLastFilter()
    let subtitle = ''
    let uid = ''

    switch (lastFilter.filter) {
      case 'toSpace':
        subtitle = 'Normally spaced'
        uid = 'spaced'
        break
      case 'toUpper':
        subtitle = 'UPPER CASE'
        uid = 'uppercase'
        break
      case 'toLower':
        subtitle = 'lower case'
        uid = 'lowercase'
        break
      case 'toTitle':
        subtitle = 'Title Case'
        uid = 'titlecase'
        break
      case 'toSentence':
        subtitle = 'Sentence case'
        uid = 'sentencecase'
        break
      case 'toCamel':
        subtitle = 'camelCase'
        uid = 'camelcase'
        break
      case 'toPascal':
        subtitle = 'PascalCase'
        uid = 'pascalcase'
        break
      case 'toSnake':
        subtitle = 'snake_case'
        uid = 'snakecase'
        break
      case 'toSpinal':
        subtitle = 'spinal-case'
        uid = 'spinalcase'
        break
    }
    return {
      title: lastFilter.after,
      arg: lastFilter.after,
      uid: uid,
      subtitle: subtitle
    }
  }

}