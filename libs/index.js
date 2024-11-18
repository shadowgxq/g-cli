import { Command } from 'commander';
const program = new Command();
program
    .version('0.0.1')
    .description('My CLI tool')
    .option('-f, --foo', 'enable some foo');
program.parse(process.argv);
