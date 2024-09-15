const config = (plop) => {
    plop.setGenerator('component', {
        description: 'Generate a react component with container pattern',
        prompts: [
            {
                type: "input",
                name: "title",
                message: "What do you want to name this component ?"
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{title}}/index.tsx",
                templateFile: "templates/index.hbs",
            },
            {
                type: "add",
                path: "src/components/{{title}}/{{title}}Container.tsx",
                templateFile: "templates/FunctionalContainerComponent.hbs",
            },
            {
                type: "add",
                path: "src/components/{{title}}/{{title}}.tsx",
                templateFile: "templates/FunctionalComponent.hbs",
            },
            {
                type: "add",
                path: "src/components/{{title}}/{{title}}ContainerStyles.tsx",
                templateFile: "templates/FunctionalContainerComponentStyles.hbs",
            }

        ]
    });
};

module.exports = config;