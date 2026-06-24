// submit.js

import { useStore } from './store';
import { parsePipeline } from './api/client';

export const SubmitButton = () => {
  const { nodes, edges, alertOpen, showAlert } = useStore();
  const handleSubmit = async () => {
    const response = await parsePipeline(nodes, edges);
    showAlert(response);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" disabled={alertOpen} onClick={handleSubmit} >
        {alertOpen ? 'Viewing Results' : 'Submit'}
      </button>
    </div>
  );
};