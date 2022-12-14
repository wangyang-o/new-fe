import gradient from 'gradient-string';
import { bold, green } from 'kolorist';
import packageJson from '../package.json';

const titlePrompt = () => {
  const title = 'welcome to use new,new a front-end project! ';
  console.log(gradient.rainbow(title));
  console.log(`version:${bold(green(packageJson.version))}\n`);
};
export default titlePrompt;
