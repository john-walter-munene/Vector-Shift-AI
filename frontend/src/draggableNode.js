// draggableNode.js

import styles from './assets/styles/DraggableNode.module.css';

export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';

  };

  return (

    <div className={styles["node"]} onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')} draggable>

      <span className={styles["label"]}>
        {label}
      </span>

    </div>

  );

};