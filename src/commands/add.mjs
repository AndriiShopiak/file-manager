import fs from 'node:fs/promises';
import path from 'node:path';

export const addFile = async (currentDir, args) => {
    if (args[0]) {
        const filePath = path.join(currentDir, args[0]);
        try {
          await fs.writeFile(filePath, '', { flag: 'wx' });
          console.log(`File '${args[0]}' created`);
        } catch (err) {
          if (err.code === 'EEXIST') {
            console.log('File already exists');
          } else {
            console.log('Error creating file');
          }
        }
      } else {
        console.log('Filename is required');
      }
};