// llmNode.js

import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {

  const handles = [
    { type: 'target', position: 'left', id: `${id}-system`, style: { top: '33%' }, },
    { type: 'target', position: 'left', id: `${id}-prompt`, style: { top: '66%' }, },
    { type: 'source', position: 'right', id: `${id}-response`, },
  ];

  return (
    <BaseNode title="LLMNode" handles={handles}>
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};