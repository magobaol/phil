import {toSpace} from "./respacer";

type CaseConverters = (text: string) => string;

const flatten = (text: string) => {
  return toLower(toSpace(text))
}

//UPPER CASE
export const toUpper: CaseConverters = (text) => { return text.toUpperCase() }

//lower case
export const toLower: CaseConverters = (text) => { return text.toLowerCase() }

//Title Case
export const toTitle: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/\b\w/g, (match) => match.toUpperCase());
}

//Sentence case
export const toSentence: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/^[a-z]{1}/g, (match) => match.toUpperCase());
}

//camelCase
export const toCamel: CaseConverters = (text) => {
  const flat = flatten(text);
  return flat.replace(/^\w|[A-Z]|\b\w/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
}

//PascalCase
export const toPascal: CaseConverters = (text) => {
  const flat = flatten(text);
  return flat.replace(/^\w|[A-Z]|\b\w/g, (word) => word.toUpperCase()).replace(/\s+/g, '');
}

//snake_case
export const toSnake: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_').toLowerCase();
}

//spinal-case
export const toSpinal: CaseConverters = (text) => {
  const flat = flatten(text)
  return flat.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
}
