export const extractVariables = (text) => {

  // matches everything inside {{ ... }}
  const matches = text.matchAll(/{{(.*?)}}/g);

  const variables = [];

  for (const match of matches) {

    const variable = match[1].trim();

    // valid JS identifier
    const isValid =
      /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(variable);

    if (isValid && !variables.includes(variable)) {
      variables.push(variable);
    }
  }

  return variables;

};