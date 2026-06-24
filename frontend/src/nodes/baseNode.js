import { Handle, Position } from 'reactflow';
import styles from '../assets/styles/BaseNode.module.css';

const positionMap = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export const BaseNode = ({ title, children, handles = [], className = "" }) => {
  return (
    <div className={`${styles["node"]} ${className}`}>

      {/* Handles */}
      {handles.map((handle, index) => (
        <Handle key={index} type={handle.type} position={positionMap[handle.position]}
          id={handle.id} style={handle.style} />
      ))}

      {/* Header */}
      <div className={styles["header"]}>{title}</div>

      {/* Content */}
      <div className={styles["content"]}>{children}</div>

    </div>
  );
};