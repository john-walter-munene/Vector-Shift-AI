// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>

        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />

        {/* New nodes */}
        <DraggableNode type='api' label='API' />
        <DraggableNode type='condition' label='Condition' />
        <DraggableNode type='database' label='Database' />
        <DraggableNode type='merge' label='Merge' />
        <DraggableNode type='imageGenerator' label='Image Gen' />

      </div>
    </div>
  );
};