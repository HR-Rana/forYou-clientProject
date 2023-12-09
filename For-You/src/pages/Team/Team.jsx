import React from "react";
import { TeamData } from "../../assets/Data/TeamData/TeamData";
import TeamCard from "../Home/Team/TeamCard/TeamCard";

export default function Team() {
	return (
		<div className="team-page">
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
