// toolbar.js

import { DraggableNode } from './draggableNode';
import styles from './assets/styles/Toolbar.module.css';

export const PipelineToolbar = () => {

  return (

    <div className={styles["toolbar"]}>

      <div className={styles["container"]}>

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