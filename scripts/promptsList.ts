import prompts, { Answers, PromptObject } from 'prompts';
import { CUSTOM_REACT, CUSTOM_VUE, REACT, VUE } from '../constants';
import titlePrompt from '../utils/banner';
interface PromptsList {
  projectName: string;
  description: string;
  projectType: number;
}
type AnswersType = Answers<string> & Partial<PromptsList>;
const promptsList = async () => {
  titlePrompt();
  const questions: PromptObject[] = [
    {
      type: 'text',
      name: 'projectName',
      message: 'What is your project name?',
      initial: 'fe-project',
    },
    {
      type: 'text',
      name: 'description',
      message: 'What is your project description',
      initial: 'a fe-project',
    },
    {
      type: 'select',
      name: 'projectType',
      message: 'What type of project do you want to create?',
      choices: [
        {
          title: 'custom vue',
          value: CUSTOM_VUE,
          description: "the new cli's custom vue",
        },
        {
          title: 'custom react',
          value: CUSTOM_REACT,
          description: "the new cli's custom react",
        },
        { title: 'vue', value: VUE, description: 'based by create-vue' },
        {
          title: 'react',
          value: REACT,
          description: 'based by create-react-app',
        },
      ],
    },
  ];
  const response: AnswersType = await prompts(questions);
  return response as PromptsList;
};

export default promptsList;
