import React from "react";
import { orbit } from "ldrs";

orbit.register();
export default function Loader() {
	return (
		<div className="loader">
			<div className="loading">
				<l-orbit size="65" speed="1.5" color="red"></l-orbit>
			</div>
		</div>
	);
}
