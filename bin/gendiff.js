#!/usr/bin/env node
import { program } from "commander";
import { fs } from "file-system";
import * as parser from "../bin/parser.js";

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("0.0.1")
  .helpOption("-h, --help", "output usage information")
  .arguments("<filepath1> <filepath2>")
  .option("-f, --format [type]", "output format")
  .action((first, second) => {
    const firstFile = fs.readFileSync(parser.resolvePath(first), {
      encoding: "utf8",
    });
    const secondFile = fs.readFileSync(parser.resolvePath(second), {
      encoding: "utf8",
    });
    console.log(firstFile);
    console.log(secondFile);
  });

program.parse();
