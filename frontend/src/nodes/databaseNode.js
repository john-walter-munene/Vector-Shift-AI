import { useState } from 'react';
import { BaseNode } from './baseNode';

export const DatabaseNode = ({ id, data }) => {
  const [engine, setEngine] = useState(data?.engine || 'PostgreSQL');

  const handles = [
    { type: 'target', position: 'top', id: `${id}-query` },
    { type: 'source', position: 'bottom', id: `${id}-results` }
  ];

  return (
    <BaseNode title="Database Node" handles={handles}>
      <label>
        Engine:
        <select value={engine} onChange={(e) => setEngine(e.target.value)}>
          <option>PostgreSQL</option>
          <option>MySQL</option>
          <option>MongoDB</option>
        </select>
      </label>
    </BaseNode>
  );
};