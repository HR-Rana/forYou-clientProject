import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
	return (
		<div className="ResetPassword">
			<div className="login-page">
				<div className="login-section ">
					<div className="logo">
						<Link to={"/"}>
							<img src="" alt="for-you" />
						</Link>
					</div>
					<h3>Forgot your Password?</h3>
					<p>
						Don't worry, we're here to help you.. please enter your email and
						New password for Recover your valuable Account.. thank you.!
					</p>
					<form action="">
						<input type="email" placeholder="Enter your email" />
						<input type="password" placeholder="Enter New Password" />
						<input type="password" placeholder="Confirm New Password" />
						<input type="submit" value="submit" />
					</form>
				</div>
			</div>
		</div>
	);
}
