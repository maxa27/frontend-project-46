#!/usr/bin/env node
import { program } from "commander";

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .helpOption('-h, --help', 'output usage information')
    .argument('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')

program.parse();