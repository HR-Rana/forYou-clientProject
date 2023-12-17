import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "./../../pages/About/About";
import Investment from "./../../pages/Investment/Investment";
import Blog from "./../../pages/Blog/Blog";
import Team from "./../../pages/Team/Team";
import Contact from "./../../pages/Contact/Contact";
import ProfilePage from "../../pages/Home/UserProfile/ProfilePage";
import Error from "../../pages/ErrorPage/Error";
import AuthPage from "../../pages/AuthPage/AuthPage";

export default function Routing() {
	return (
		<Routes>
      <Route path="/*" element={<Error/>}/>
			<Route path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/investment" element={<Investment />}></Route>
			{/* <Route path='/Blog' element={<Blog/>}></Route> */}
			<Route path="/Team-members" element={<Team />}></Route>
			<Route path="/Contact" element={<Contact />}></Route>
			<Route path="/Profile" element={<ProfilePage />} />
			<Route path="/Authentication" element={<AuthPage/>}/>
			<Route path="/Registration" element={<AuthPage/>}/>
			
		</Routes>
	);
}
