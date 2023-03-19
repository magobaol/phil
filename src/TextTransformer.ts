import * as CaseConverters from './Filters/caseConverters';
import { Filter } from './Filters/filter';
import { toSpace } from './Filters/respacer';
import { AppliedFilter } from './Filters/appliedFilter';

export class TextTransformer {
  private appliedFilters: AppliedFilter[] = [];
  private text: string;
  constructor(text: string) {
    this.text = text;
  }

  private resetAppliedFilters() {
    this.appliedFilters = [];
  }

  private apply(filter: Filter) {
    const before = this.text;
    const after = (this.text = filter(this.text));
    const filterName = filter.filterName;
    this.appliedFilters.push({
      filter: filterName,
      before,
      after,
    });
  }

  public getAppliedFilters() {
    return this.appliedFilters;
  }

  public setText(text: string) {
    this.text = text;
    this.resetAppliedFilters();
    return this;
  }

  getText() {
    return this.text;
  }

  getLastFilter() {
    return this.appliedFilters[this.appliedFilters.length - 1];
  }

  public toSpace() {
    this.apply(toSpace);
    return this;
  }

  public toUpper() {
    this.apply(CaseConverters.toUpper);
    return this;
  }

  public toLower() {
    this.apply(CaseConverters.toLower);
    return this;
  }

  public toTitle() {
    this.apply(CaseConverters.toTitle);
    return this;
  }

  public toSentence() {
    this.apply(CaseConverters.toSentence);
    return this;
  }

  public toCamel() {
    this.apply(CaseConverters.toCamel);
    return this;
  }

  public toPascal() {
    this.apply(CaseConverters.toPascal);
    return this;
  }

  public toSnake() {
    this.apply(CaseConverters.toSnake);
    return this;
  }

  public toSpinal() {
    this.apply(CaseConverters.toSpinal);
    return this;
  }
}
