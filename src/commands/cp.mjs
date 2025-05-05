import fs from 'fs';
import path from 'path';

export const copyFile = async (source, destination) => {
  try {
    const sourcePath = path.resolve(source);
    const destinationPath = path.resolve(destination);

    await fs.promises.copyFile(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
  } catch (err) {
    console.error('Failed to copy file:', err.message);
  }
};
