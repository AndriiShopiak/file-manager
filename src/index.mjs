import readline from 'node:readline';
import path from 'node:path';
import { listDirectory } from './commands/ls.mjs';

const currentDir = path.dirname(import.meta.filename);

const args = process.env;
const userName = args.npm_config_username;

console.log(`\x1b[32mWelcome to the File Manager, ${userName}!\x1b[0m`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

rl.prompt();

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');
  switch (command) {
    case 'ls':
      await listDirectory(currentDir);
      break;
    case 'exit':
      console.log('Exiting the File Manager. Goodbye!');
      rl.close();
      break;
    default:
      console.log(`Unknown command: ${command}`);
  }
  rl.prompt();
});
  
  rl.on('close', () => {
    process.exit(0);
  });