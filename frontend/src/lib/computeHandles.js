export const computeTextHandles = (id, variables) => {

  const handles = [

    // Default output handle
    { type: 'source', position: 'right', id: `${id}-output` }

  ];

  variables.forEach((variable, index) => {

    handles.push({
      type: 'target',
      position: 'left',
      id: `${id}-${variable}`,

      // Evenly distribute handles vertically
      style: { top: `${((index + 1) * 100) / (variables.length + 1)}%`}
    });
  });

  return handles;
};