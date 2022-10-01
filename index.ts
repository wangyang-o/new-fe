#!/usr/bin/env node
import minimist, { ParsedArgs } from 'minimist';
import promptsList from './scripts/promptsList';
import banner from './utils/banner';
import { REACT, VUE } from './constants';
import { $, cd } from 'zx';
import { cyan } from 'kolorist';
type OptionsKey = 'create' | 'version' | 'help';
type Options = Partial<Record<OptionsKey, string | string[]>> & ParsedArgs;

const init = async () => {
  const { _, ...argv }: Options = minimist(process.argv.slice(2), {
    alias: {
      version: ['v', 'V'],
      help: ['h', 'H'],
      create: 'c',
    } as Options,
    // all arguments are treated as booleans
    boolean: true,
  });
  if (!Object.keys(argv).length) {
    const userInput = await promptsList();
    if (userInput.projectType === VUE) {
      // await $`pnpm create vue ${userInput.projectName}`;
      await $`npm init vue@3 ${userInput.projectName}`;
      console.log(cyan('New is automatically executing...'));
      cd(userInput.projectName);
      await $`pnpm install`;
      await $`pnpm dev`;
    }
    if (userInput.projectType === REACT) {
      await $`pnpm create react-app ${userInput.projectName} --typescript`;
      console.log(cyan('New is automatically executing...'));
      cd(userInput.projectName);
      await $`pnpm start`;
    }
  }
  if (argv.help) {
    banner();
  }
  if (argv.version) {
    banner();
  }
};
init().catch((e) => {});
