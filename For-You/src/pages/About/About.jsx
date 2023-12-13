import React from "react";
import AboutTerms from "./Sections/About-Terms-section/AboutTerms";
import AboutUs from "./Sections/About Us/AboutUs";

export default function About() {
	return (
		<div className="about-page">
			<section>
				<AboutUs />
			</section>
			<section>
				<AboutTerms />
			</section>
		</div>
	);
}
