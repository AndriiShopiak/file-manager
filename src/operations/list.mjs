import fs from 'node:fs/promises';

export const listDirectory = async (currentPath) => {
  try {
    const files = await fs.readdir(currentPath, { withFileTypes: true });

    const result = files.map(file => ({
      Name: file.name,
      Type: file.isDirectory() ? 'directory' : 'file'
    }));

    console.table(result);
  } catch (err) {
    console.error('Error reading directory:', err.message);
  }
};
