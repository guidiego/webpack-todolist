
const testsContext = require.context('./', true, /\.spec\.js$/);

testsContext.keys().forEach(testsContext);

const componentsContext = require.context('../src/', true, /^((?!main).)*\.js$/);

componentsContext.keys().forEach(componentsContext);
