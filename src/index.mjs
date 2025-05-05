import readline from 'node:readline';
import path from 'node:path';
import { listDirectory } from './commands/ls.mjs';
import { changeDirectory } from './commands/cd.mjs';
import { readFile } from './commands/cat.mjs';

const currentDir = path.dirname(import.meta.filename);

const args = process.env;
const userName = args.npm_config_username;

console.log(`\x1b[32mWelcome to the File Manager, ${userName}!\x1b[0m`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `You are currently in ${currentDir} > `,
});

rl.prompt();

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');
  switch (command) {
    case 'ls':
      await listDirectory(currentDir);
      break;
    case 'cd':
      currentDir = await changeDirectory(currentDir, args[0]);
      break;
    case 'cat':
      await readFile(currentDir, args[0]);
      break;
    case '.exit':
      rl.close();
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
  rl.prompt();
});
  
  rl.on('close', () => {
    console.log(`\x1b[36mThank you for using File Manager, ${userName} ,goodbye!\x1b[0m`);
    process.exit(0);
  });