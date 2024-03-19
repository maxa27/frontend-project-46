#!/usr/bin/env node
import { program } from 'commander';
import { getPath, getFile, getObject } from './parser.js';
import { diff, toString } from './getDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((first, second) => {
    const firstFile = getObject(getFile(getPath(first)));
    const secondFile = getObject(getFile(getPath(second)));
    toString(diff(firstFile, secondFile));
  });

program.parse();
