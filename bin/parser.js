import path from 'path';
import { fs } from 'file-system';

export const getPath = (filePath) => path.resolve(process.cwd(), filePath);

export const getFile = (file) => fs.readFileSync(file, { encoding: 'utf8' });

export const getObject = (str) => JSON.parse(str);
