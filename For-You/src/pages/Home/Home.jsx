import React from "react";
import Hero from "./Hero/Hero";
import ProjectDone from "./ProjectDone/ProjectDone";
import LatestTransition from "../LatestTransiction/LatestTransition";
import Advantage from "./Advantage/Advantage";
import Team from "./Team/Team";
import ChooseUs from "./Why-chooseUs/ChooseUs";
import HowWorks from "./HowItWorks/HowWorks";
import Faq from "../FAQ/Faq";
import InvestOffer from "./Offer/InvestOffer";

export default function Home() {
	return (
		<div className="home-page">
			<Hero />
			<section>
				<ProjectDone />
			</section>
			<section>
				<HowWorks/>
			</section>
			<section>
				<InvestOffer/>
			</section>
			<section>
				<LatestTransition />
			</section>
			<section>
				<Advantage />
			</section>
			<section>
				<ChooseUs/>
			</section>
			<section>
				<Team />
			</section>
			<section>
				<Faq/>
			</section>
		</div>
	);
}
