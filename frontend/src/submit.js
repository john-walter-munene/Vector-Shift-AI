// submit.js

import { useStore } from './store';
import { parsePipeline } from './api/client';

import styles from './assets/styles/SubmitButton.module.css';

export const SubmitButton = () => {

  const { nodes, edges, alertOpen, showAlert } = useStore();

  const handleSubmit = async () => {
    const response = await parsePipeline(nodes, edges);
    showAlert(response);
  };

  return (

    <div className={styles["container"]}>

      <button type="button" className={styles["button"]} disabled={alertOpen} onClick={handleSubmit}>
        {alertOpen ? 'Viewing Results' : 'Submit'}
      </button>

    </div>

  );

};