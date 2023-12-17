import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="login-page">
			<h3>Login your Account</h3>
			<div className="login-section">
				<form action="">
					<input type="email" placeholder="enter your email" />
					<input type="password" placeholder="enter your Password" />
					<input type="submit" value="Login" />
          <div className="login-reg-refer">
            <p>Don't have any account?</p>
            <p><Link to={'/Registration'}>Registration Now</Link></p>
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
