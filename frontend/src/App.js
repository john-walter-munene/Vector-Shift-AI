import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Alert } from './alerts';
import styles from './assets/styles/App.module.css';

function App() {
  return (
    <div className={styles["app"]}>
      <PipelineToolbar />
      <Alert />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
