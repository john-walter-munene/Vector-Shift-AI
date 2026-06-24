// alerts.js

import { useStore } from './store';
import styles from './assets/styles/Alert.module.css';

export const Alert = () => {
  const { alertOpen, alertData, hideAlert } = useStore();

  if (!alertOpen) return null;

  return (

    <div className={styles["overlay"]}>
      <div className={styles["alert"]}>
        <div className={styles["header"]}>Pipeline Analysis</div>
        <div className={styles["content"]}>
          <p>Nodes: {alertData.num_nodes}</p>
          <p>Edges: {alertData.num_edges}</p>
          <p>DAG: {alertData.is_dag ? "Yes" : "No"}</p>
        </div>

        <div className={styles["footer"]}>
          <button onClick={hideAlert}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};