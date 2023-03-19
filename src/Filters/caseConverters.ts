import {toSpace} from "./respacer";

interface CaseConverters {
  (text: string): string;
  filterName: string;
}

const flatten = (text: string) => {
  return toLower(toSpace(text))
}

//UPPER CASE
export const toUpper: CaseConverters = (text) => { return text.toUpperCase() }
toUpper.filterName = 'toUpper'

//lower case
export const toLower: CaseConverters = (text) => { return text.toLowerCase() }
toLower.filterName = 'toLower'

//Title Case
export const toTitle: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/\b\w/g, (match) => match.toUpperCase());
}
toTitle.filterName = 'toTitle'

//Sentence case
export const toSentence: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/^[a-z]{1}/g, (match) => match.toUpperCase());
}
toSentence.filterName = 'toSentence'

//camelCase
export const toCamel: CaseConverters = (text) => {
  const flat = flatten(text);
  return flat.replace(/^\w|[A-Z]|\b\w/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
}
toCamel.filterName = 'toCamel'

//PascalCase
export const toPascal: CaseConverters = (text) => {
  const flat = flatten(text);
  return flat.replace(/^\w|[A-Z]|\b\w/g, (word) => word.toUpperCase()).replace(/\s+/g, '');
}
toPascal.filterName = 'toPascal'

//snake_case
export const toSnake: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_').toLowerCase();
}
toSnake.filterName = 'toSnake'

//spinal-case
export const toSpinal: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
}
toSpinal.filterName = 'toSpinal'
