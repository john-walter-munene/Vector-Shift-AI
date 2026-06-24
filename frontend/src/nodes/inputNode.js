// inputNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handles = [{ type: 'source', position: 'right', id: `${id}-value`, },];

  return (
    <BaseNode title="InputNode" handles={handles}>

      <label>
        Name:
        <input value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>

      <label>
        Type:
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>

    </BaseNode>
  );
};