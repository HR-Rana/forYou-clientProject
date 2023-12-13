import React from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";

export default function Footer() {
	return (
		<footer>
			<div className="footer-content flex-box">
				<div className="footer-logo content">
					<p>
						<Link to={"/"}>For-you</Link>
					</p>
					<small>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
						assumenda modi minima harum qui. Nulla eos deleniti fugiat?
					</small>
				</div>
				<div className="nav-items content">
					<h4>Quick navlinks</h4>
					<nav>
						<ul>
							<li>
								<Link to={"/"}> Home</Link>
							</li>
							<li>
								<Link to={"/About"}>About</Link>
							</li>
							<li>
								<Link to={"/Investment"}>Investment</Link>
							</li>
							<li>
								<Link to={"/Team-members"}>Team</Link>
							</li>
							<li>
								<Link to={"/Contact"}>Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="content">
					<h4></h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
						sequi nulla quod totam incidunt veniam doloribus, laboriosam dolor
						quis in?
					</p>
				</div>
				<div className="content address">
					<h4>Contact us</h4>
					<div>
						<li>
							<span>
								<IoCall />
							</span>{" "}
							<p>+1 (409) 987–5874</p>
						</li>
						<li>
							<span><  </span> <p>info@demolink.org</p>
						</li>
						<li>
							<span></span> <p>6036 Richmond hwy, Alexandria, VA USA 22303</p>
						</li>
					</div>
				</div>
			</div>

			<div className="copy-right">
				<p>
					&copy; copyright 2023 | all rights deserved by{" "}
					<Link to={""}>For-You</Link>
				</p>
			</div>
		</footer>
	);
}
