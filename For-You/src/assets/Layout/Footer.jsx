import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<div className="footer-content flex-box">
				<div className="footer-logo">
					<p>
						<Link to={"/"}>For-you</Link>
					</p>
					<small>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
						assumenda modi minima harum qui. Nulla eos deleniti fugiat?
					</small>
				</div>
				<div className="nav-items">
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
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sequi nulla quod totam incidunt veniam doloribus, laboriosam dolor quis in?</p>
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sequi nulla quod totam incidunt veniam doloribus, laboriosam dolor quis in?</p>
        </div>
			</div>
		</footer>
	);
}
