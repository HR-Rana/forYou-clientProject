import React from "react";
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import { useHref, useParams } from "react-router-dom";

export default function AuthPage() {
	const [login, setLogin] = useState(true);
    

    const getURL = window.location.href;
    const Path = '/Registration'
    const match = getURL.includes(Path);
  

    const handleAuthFormSwitch =() =>{
		setLogin(false)
	}
   

	return (
		<div className="Authentication-page">
			<div className="login-registration">
				<div className="log-reg-button">
					<button
						onClick={() => {
							setLogin(true);
						}}
						style={{
							backgroundColor: login ? "brown" : "",
							color: login ? "white" : "",
						}}
					>
						Login
					</button>
					<button
						onClick={() => {
							setLogin(false);
						}}
						style={{
							backgroundColor: login ? "" : "brown",
							color: login ? " " : "white",
						}}
					>
						Registration
					</button>
				</div>
				<div className="auth-form-area">
					{login ? (
						<span>
							{" "}
							<Login authFormSwitch={handleAuthFormSwitch} />{" "}
						</span>
					) : (
						<span>
							<Registration authFormSwitch={handleAuthFormSwitch} />
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
