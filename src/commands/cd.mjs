import path from 'node:path';
import fs from 'node:fs/promises';

export const changeDirectory = async (currentDir, targetDir) => {
  const newPath = path.resolve(currentDir, targetDir);
  try {
    const stats = await fs.stat(newPath);
    if (stats.isDirectory()) {
      return newPath;
    } else {
      console.error('Target is not a directory.');
      return currentDir;
    }
  } catch (err) {
    console.error('Directory not found:', err.message);
    return currentDir;
  }
};
