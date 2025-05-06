import fs from 'node:fs/promises';
import path from 'node:path';

export const readFile = async (currentDir, fileName) => {
  const filePath = path.resolve(currentDir, fileName);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
};
