import fs from 'node:fs/promises';
import path from 'node:path';

export const removeFile =  async (currentDir, args) => {
    if (args[0]) {
        const filePath = path.join(currentDir, args[0]);
        try {
          await fs.unlink(filePath);
          console.log(`File '${args[0]}' deleted`);
        } catch (err) {
          if (err.code === 'ENOENT') {
            console.log('File not found');
          } else {
            console.log('Error deleting file');
          }
        }
      } else {
        console.log('Filename is required');
      }
}