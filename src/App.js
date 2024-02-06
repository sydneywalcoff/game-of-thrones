import './App.css';

import Header from './components/Header';
import HouseList from './components/HouseList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <HouseList />
      </div>
    </div>
  );
}

export default App;