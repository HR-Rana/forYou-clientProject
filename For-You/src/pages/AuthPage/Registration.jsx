import React from "react";
import { Link } from "react-router-dom";

export default function Registration({authFormSwitch}) {
	console.log(authFormSwitch)
	return (
		<div className="Registration-page login-page">
			<h3>Registration Now</h3>
			<div className="login-section">
				<form action="">
					<input type="text" placeholder="Enter your Name" />
					<input type="email" placeholder="Enter your email" />
					<input type="password" placeholder="Enter your Password" />
					<input type="password" placeholder="Confirm Password" />
					<input type="submit" value="Registration" />
					<div className="login-reg-refer">
						<p>Do you have account?</p>
						<p onClick={authFormSwitch}>
							<Link to={"/Registration"}>Login Now</Link>
						</p>
					</div>
				</form>
				<div className="Login-otherWay flex">
					<p>or Try another way</p>
					<div className="google">
						<button>Google</button>
					</div>
					<div className="facebook">
						<button>Facebook</button>
					</div>
				</div>
			</div>
		</div>
	);
}
