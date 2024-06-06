import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Home from "./pages/Home.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home/>
        
       
        
      </header>
    </div>
  );
}

export default App;
