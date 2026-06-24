import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Alert } from './alerts';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <Alert />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
