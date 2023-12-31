import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import  Avatar  from "../../assets/images/02.jpg";

export default function Navbar() {
	const { userData, setLogin } = useContext(AuthContext);

	console.log(userData);

	return (
		<div className="top-navbar">
			<div className="top-items">
				<div className="download-app-title">
					<p>
						Download the App for Visit it easily from your Phone to get Better
						Experience..
					</p>
					<button>Download</button>
				</div>
			</div>

			<div className="navigation-bar">
				<div className="logo">
					<Link to="/">
						<p>Retaron</p>
					</Link>
				</div>
				<div className="right-navbar-items">
					<nav>
						<ul>
							<li>
								<NavLink to={"/"}> Home</NavLink>
							</li>
							<li>
								<NavLink to={"/About"}>About</NavLink>
							</li>
							<li>
								<NavLink to={"/Investment"}>Investment</NavLink>
							</li>
							<li>
								<NavLink to={"/Team-members"}>Team</NavLink>
							</li>
							<li>
								<NavLink to={"/Contact"}>Contact</NavLink>
							</li>
						</ul>
					</nav>
					{userData ? (
						<div className="login-user">
							<Link to={'/Profile'}><span>{"User-Name"}</span>
							<img src={Avatar} alt="profile" /></Link>
						</div>
					) : (
						<div className="account">
							<Link to={"/Authentication"}>
								<button
									onClick={(e) => {
										setLogin(true);
									}}
								>
									Login
								</button>
							</Link>
							<Link to={"/Registration"}>
								<button
									onClick={(e) => {
										setLogin(false);
									}}
								>
									Resigtration
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
