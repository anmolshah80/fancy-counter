import Title from '@/components/Title';
import Count from '@/components/Count';
import ResetButton from '@/components/ResetButton';
import CountButtons from '@/components/CountButtons';

function App() {
  return (
    <main>
      <div>
        <Title />
        <Count />
        <ResetButton />
        <CountButtons />
      </div>
    </main>
  );
}

export default App;
