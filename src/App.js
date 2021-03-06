import './App.css';
import ReducerExample from './components/ReducerExample';
import EffectExample from './components/EffectExample';
import RefExample from './components/RefExample';
import LayoutEffectExample from './components/LayoutEffectExample';
import ImperativeHandleExample from './components/useImperativeHandleExample/ImperativeHandleExample';
import ContextExample from './components/useContextExample/ContextExample';
import MemoExample from './components/MemoExample';
import CallBackExample from './components/useImperativeHandleExample/CallBackExample/CallBackExample';
import Comparehooks from './components/compareHooks/Comparehooks';

function App() {
  return (
    <div className="App">
      <ReducerExample />
      <EffectExample />
      <RefExample />
      <LayoutEffectExample />
      <ImperativeHandleExample />
      <ContextExample />
      <MemoExample />
      <CallBackExample />
      <Comparehooks />
    </div>
  );
}

export default App;
