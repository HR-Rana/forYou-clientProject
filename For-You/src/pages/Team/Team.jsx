import React from "react";
import { TeamData } from "../../assets/Data/TeamData/TeamData";
import TeamCard from "../Home/Team/TeamCard/TeamCard";

export default function Team() {
	return (
		<div className="team-page">
			<div className="title">
				<h3>Trust the Professionals</h3>
				<p>We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed investor.</p>
			</div>
			<div className="team-items team-memebers">
				{TeamData.map((items, index) => {
					const { img, name, designation, id } = items;
					return (
						<TeamCard
							img={img}
							name={name}
							slice={true}
							designation={designation}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
