#!/usr/bin/env node
import packageJson from './package.json';
import minimist, { ParsedArgs } from 'minimist';
import gradient from 'gradient-string';
import { green } from 'kolorist';
type OptionsKey = 'create' | 'version' | 'help';
type Options = Partial<Record<OptionsKey, string | string[]>> & ParsedArgs;

const { _, ...argv }: Options = minimist(process.argv.slice(2), {
  alias: {
    version: ['v', 'V'],
    help: ['h', 'H'],
    create: 'c',
  } as Options,
  // all arguments are treated as booleans
  boolean: true,
});
if (!Object.keys(argv).length ||argv.help) {
  const title = 'welcome to use new,new a front-end project!';
  console.log(gradient.rainbow(title));
}
if (argv.version) {
  console.log('welcome to use new,new a front-end project!');
  console.log('version:', green(packageJson.version));
}
if (argv.help) {
  console.log('welcome to use new,new a front-end project!');
  console.log('version:', green(packageJson.version));
}
