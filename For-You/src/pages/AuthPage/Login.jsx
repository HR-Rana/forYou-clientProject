import React from "react";
import { Link } from "react-router-dom";
import google from '../../assets/images/Google.png'
import facebook from '../../assets/images/facebook.png'

export default function Login() {
	return (
		<div className="login-page">
			<h3>Login your Account</h3>
			<div className="login-section">
				<form action="">
					<input type="email" placeholder="Enter your email" />
					<input type="password" placeholder="Enter your Password" />
					<input type="submit" value="Login" />
					<div className="login-reg-refer">
						<p><Link to={'/ResetPassword'}>forgot password?</Link></p>
						<p>
							Don't have account?
							<Link to={"/Registration"}>Registration Now</Link>
						</p>
					</div>
				</form>
				<div className="Login-otherWay flex">
					<p>Or, Login with</p>
					<div className="google">
						<button><img src={google} alt="" /> Google</button>
					</div>
					<div className="facebook">
						<button><img src={facebook} alt="" /> Facebook</button>
					</div>
				</div>
			</div>
		</div>
	);
}
