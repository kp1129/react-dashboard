
import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightPanel from './components/RightPanel/RightPanel';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className='app-glass-wrapper'>
        <Sidebar />
        <MainDash />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
