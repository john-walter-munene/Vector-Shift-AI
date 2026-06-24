import { useState } from 'react';
import { BaseNode } from './baseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'Equals');

  const handles = [
    { type: 'target', position: 'left', id: `${id}-input` },
    { type: 'source', position: 'right', id: `${id}-true`, style: { top: '33%' } },
    { type: 'source', position: 'right', id: `${id}-false`, style: { top: '66%' } }
  ];

  return (
    <BaseNode title="Condition Node" handles={handles}>
      <label>
        Condition:
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option>Equals</option>
          <option>Contains</option>
          <option>Greater Than</option>
          <option>Less Than</option>
        </select>
      </label>
    </BaseNode>
  );
};