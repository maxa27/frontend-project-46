#!/usr/bin/env node
import { program } from 'commander';
import { fs } from 'file-system';
import parser from './parser.js';
import diff from './getDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((first, second) => {
    const firstFile = JSON.parse(fs.readFileSync(parser(first), {
      encoding: 'utf8',
    }));
    const secondFile = JSON.parse(fs.readFileSync(parser(second), {
      encoding: 'utf8',
    }));
    console.log(diff(firstFile, secondFile));
  });

program.parse();
