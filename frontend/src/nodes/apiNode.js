import { useState } from 'react';
import { BaseNode } from './baseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [endpoint, setEndpoint] = useState(data?.endpoint || '/users');

  const handles = [
    { type: 'target', position: 'left', id: `${id}-request` },
    { type: 'source', position: 'right', id: `${id}-response` }
  ];

  return (
    <BaseNode title="API Node" handles={handles}>

      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </label>

      <label>
        Endpoint:
        <input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
      </label>

    </BaseNode>
  );
};