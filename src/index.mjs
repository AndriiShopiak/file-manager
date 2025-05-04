import readline from 'node:readline';

const args = process.env;
const userName = args.npm_config_username;

console.log(`\x1b[32mWelcome to the File Manager, ${userName}!\x1b[0m`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

rl.prompt();

rl.on('line', (input) => {
    const trimmed = input.trim();
  
    if (trimmed === 'exit') {
      console.log(`\x1b[36mThank you for using File Manager, ${userName} ,goodbye!\x1b[0m`);
      rl.close();
    } else {
      console.log(`Unknown command: ${trimmed}`);
      rl.prompt();
    }
  });
  
  rl.on('close', () => {
    process.exit(0);
  });
  
