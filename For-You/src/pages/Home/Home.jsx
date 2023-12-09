import React from "react";
import Hero from "./Hero/Hero";
import ProjectDone from "./ProjectDone/ProjectDone";
import LatestTransition from "../LatestTransiction/LatestTransition";
import Advantage from "./Advantage/Advantage";
import Team from "./Team/Team";
import ChooseUs from "./Why-chooseUs/ChooseUs";
import HowWorks from "./HowItWorks/HowWorks";

export default function Home() {
	return (
		<div className="home-page container-fluid">
			<Hero />
			<section className="">
				<ProjectDone />
			</section>
			<section>
				<HowWorks/>
			</section>
			<section className="">
				<LatestTransition />
			</section>
			<section className="">
				<Advantage />
			</section>
			<section>
				<ChooseUs/>
			</section>
			<section className="">
				<Team />
			</section>

		</div>
	);
}
