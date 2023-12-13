import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/Css/style.css";
import Routing from "./assets/Routing/Routing";
import Navbar from "./assets/Layout/Navbar";
import Footer from "./assets/Layout/Footer";
import { useEffect, useState } from "react";
import Loader from "./assets/Loading/Loader";

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(()=>{
			setLoading(false)
		}, 500)
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<BrowserRouter>
					<Navbar></Navbar>
					<Routing></Routing>
					<Footer></Footer>
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
