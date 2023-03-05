import * as CaseConverters from './Filters/caseConverters'
import { toSpace } from './Filters/respacer';

export class TextTransformer {
  private appliedFilters: any[] = [];
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

}