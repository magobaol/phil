'use strict';

const { Command, Option: commanderOption } = require('commander');
import {TextTransformer} from "./TextTransformer";

const program = new Command();

program
    .name('phil')
    .version('1.0.0')
    .description('Filter text in input')
    .argument('<string>', 'Text to filter')
    .addOption(
        new commanderOption('-cc, --convert-case <string>', 'Convert case').choices([
            'space',
            'upper', 'lower', 'title', 'sentence', 'camel', 'pascal', 'snake', 'spinal'
        ])
    )

program.parse();
const options = program.opts();
let textTransformer = new TextTransformer(program.args[0]);
let results = {}

if (options.convertCase) {
    let item = '';
    switch (options.convertCase) {
        case 'space':
            item = textTransformer.toSpace().getText()
            break;
        case 'upper':
            item = textTransformer.toUpper().getText()
            break;
        case 'lower':
            item = textTransformer.toLower().getText()
            break;
        case 'title':
            item = textTransformer.toTitle().getText()
            break;
        case 'sentence':
            item = textTransformer.toSentence().getText()
            break;
        case 'camel':
            item = textTransformer.toCamel().getText()
            break;
        case 'pascal':
            item = textTransformer.toPascal().getText()
            break;
        case 'snake':
            item = textTransformer.toSnake().getText()
            break;
        case 'spinal':
            item = textTransformer.toSpinal().getText()
            break;
    }
    process.stdout.write(item)
} else {
    results = {
        items: [
            textTransformer.toSpace().getAlfredItem(),
            textTransformer.toUpper().getAlfredItem(),
            textTransformer.toLower().getAlfredItem(),
            textTransformer.toTitle().getAlfredItem(),
            textTransformer.toSentence().getAlfredItem(),
            textTransformer.toCamel().getAlfredItem(),
            textTransformer.toPascal().getAlfredItem(),
            textTransformer.toSnake().getAlfredItem(),
            textTransformer.toSpinal().getAlfredItem(),
        ]
    }
    process.stdout.write(JSON.stringify(results))
}