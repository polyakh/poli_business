const questions = [
  {
    type: "input",
    name: "componentName",
    message: "What is the component name?",
  },
  {
    type: "select",
    name: "dir",
    message: "Where is the directory?",
    choices: ["common", "pages", "components"],
  },
  {
    type: "select",
    name: "typeComponent",
    message: "Choose component type:",
    choices: ["dummy", "smart"],
  },
];
module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer.prompt(questions).then((answers) => {
      const { category, componentName, dir } = answers;
      const path = `${dir ? `${dir}/` : ``}${componentName}`;
      const absPath = `src/${dir}/${componentName}`;
      return { ...answers, path, absPath, category };
    });
  },
};
