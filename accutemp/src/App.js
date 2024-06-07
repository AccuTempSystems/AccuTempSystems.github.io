import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/Home.js";
import Footer from "./components/footer.js";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import BuildingAutomation from "./pages/BuildingAutomation.js";
import SystemsIntegration from "./pages/SystemsIntegration";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<NavBar/>
          <Home/>
					<Routes>
            {/* <Route path="" element={<Home />} /> */}
						<Route path="buildingautomation" element={<BuildingAutomation />}/>
            <Route path="systemsintegration" element={<SystemsIntegration/>}/>
					</Routes>
          <Footer />
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
