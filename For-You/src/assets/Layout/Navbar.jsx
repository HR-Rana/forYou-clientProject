import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";




export default function Navbar() {
	const {userData} = useContext(AuthContext)

	 console.log(userData);
	//  const { user, logOut } = useContext(authContext);

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
					<div className="account">
						<Link to={"/Authentication"}>
							<button>Login</button>
						</Link>
						<Link to={"/Registration"}>
							<button>Resigtration</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
