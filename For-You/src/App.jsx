import { BrowserRouter } from "react-router-dom";
import "./App.css";
import './assets/Css/style.css'
import Routing from "./assets/Routing/Routing";
import Navbar from "./assets/Layout/Navbar";
import Footer from "./assets/Layout/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<Routing></Routing>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
