import { useState } from 'react';
import { BaseNode } from './baseNode';

export const MergeNode = ({ id, data }) => {
  const [mode, setMode] = useState(data?.mode || 'Append');

  const handles = [
    { type: 'target', position: 'left', id: `${id}-a`, style: { top: '33%' } },
    { type: 'target', position: 'left', id: `${id}-b`, style: { top: '66%' } },
    { type: 'source', position: 'bottom', id: `${id}-merged` }
  ];

  return (
    <BaseNode title="Merge Node" handles={handles}>
      <label>
        Mode:
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option>Append</option>
          <option>Replace</option>
        </select>
      </label>
    </BaseNode>
  );
};