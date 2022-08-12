const questions = [
    {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?'
    },
    {
        type: 'select',
        name: 'dir',
        message: 'Where is the directory(Optional)',
        choices: ['common', 'pages']
    },
]
module.exports = {
    prompt: ({ inquirer }) => {
        return inquirer
            .prompt(questions)
            .then(answers => {
                const { category, componentName, dir } = answers
                const path = `${ dir ? `${dir}/` : `` }${componentName}`
                const absPath = `src/components/${path}`
                return { ...answers, path, absPath, category }
            })
    }
}