import React, { useContext } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/images/Google.png";
import facebook from "../../assets/images/facebook.png";
import { AuthContext } from "../../assets/Provider/AuthProvider";

export default function Registration() {
	const { setLogin } = useContext(AuthContext);

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
						<p
							onClick={(e) => {
								setLogin(true);
							}}
						>
							<Link to={"/Registration"}>Login Now</Link>
						</p>
					</div>
				</form>
				<div className="Login-otherWay flex">
					<p>Or, Login with</p>
					<div className="google">
						<button>
							<img src={google} alt="" /> Google
						</button>
					</div>
					<div className="facebook">
						<button>
							<img src={facebook} alt="" /> Facebook
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
