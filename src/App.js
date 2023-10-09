import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from "./components/about/About"
import Download from './components/download/Download';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Download/>
    </div>
  );
}

export default App;
