import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar"
import Home from "./pages/Home.js"
import Footer from "./components/footer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home/>
        <Footer/>
       
        
      </header>
    </div>
  );
}

export default App;
