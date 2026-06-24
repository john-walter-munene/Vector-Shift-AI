// textNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';
import { extractVariables } from '../lib/extractor';
import { computeTextHandles } from '../lib/computeHandles';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const variables = extractVariables(currText);
  const handles = computeTextHandles(id, variables);

  return (
    <BaseNode title="TextNode" handles={handles}>
      <label>
        Text:
        <input value={currText} onChange={(e) => setCurrText(e.target.value)}/>
      </label>
    </BaseNode>
  );
};