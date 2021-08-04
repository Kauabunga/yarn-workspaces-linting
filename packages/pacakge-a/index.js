const { echoB } = require('@yarn-workspaces-linting/package-b');

const echoA = () => {
  console.log('echoA');
};

echoA();
echoB();
