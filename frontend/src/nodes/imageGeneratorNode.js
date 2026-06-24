import { useState } from 'react';
import { BaseNode } from './baseNode';

export const ImageGeneratorNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'DALL-E');

  const handles = [
    { type: 'target', position: 'top', id: `${id}-prompt` },
    { type: 'target', position: 'left', id: `${id}-style` },
    { type: 'source', position: 'right', id: `${id}-image` }
  ];

  return (
    <BaseNode title="Image Generator" handles={handles}>
      <label>
        Model:
        <select value={model} onChange={(e) => setModel(e.target.value)} >
          <option>DALL-E</option>
          <option>Flux</option>
          <option>Stable Diffusion</option>
        </select>
      </label>
    </BaseNode>
  );
};