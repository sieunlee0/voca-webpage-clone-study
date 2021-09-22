import './App.css';
import Header from './component/Header';
import Daylist from './component/Daylist';
import Day from './component/Day';

function App() {
  return (
    <div className="App">
      <Header />
      <Daylist />
      <Day />
    </div>
  );
}

export default App;
