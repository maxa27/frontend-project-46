import { describe, expect, it } from '@jest/globals';
import { getFile, getObject, getPath } from '../bin/parser.js';
import { diff } from '../bin/getDiff.js';

describe('gendiff', () => {
  const file1 = getObject(
    getFile(
      getPath('__fixtures__/file1.json'),
    ),
  );
  const file2 = getObject(
    getFile(
      getPath('__fixtures__/file2.json'),
    ),
  );
  const compareFirstFileToSecond = getObject(
    getFile(
      getPath('__fixtures__/results/results.json'),
    ),
  ).file1Tofile2;
  const compareSecondFileToFirst = getObject(
    getFile(
      getPath('__fixtures__/results/results.json'),
    ),
  ).file2Tofile1;
  it('should compare file1 to file2', () => {
    expect(diff(file1, file2)).toEqual(compareFirstFileToSecond);
  });
  it('should compare file2 to file1', () => {
    expect(diff(file2, file1)).toEqual(compareSecondFileToFirst);
  });
});
