import './App.css';
import DisplayData from './components/dispayData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className = "naslov">Weather App</h1>
       <DisplayData/>
      </header>
    </div>
  );
}

export default App;
