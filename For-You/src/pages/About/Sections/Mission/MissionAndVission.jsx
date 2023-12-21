import React from "react";
import img from "../../../../assets/images/vission.jpg";

export default function MissionAndVission() {
	const mission = [
		{
			id: "01",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad optio laboriosam dolore maxime voluptatibus consequuntur sunt enim a magnam?",
			icons: "",
		},
		{
			id: "02",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad optio laboriosam dolore maxime voluptatibus consequuntur sunt enim a magnam?",
			icons: "",
		},
		{
			id: "03",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad optio laboriosam dolore maxime voluptatibus consequuntur sunt enim a magnam?",
			icons: "",
		},
		{
			id: "04",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad optio laboriosam dolore maxime voluptatibus consequuntur sunt enim a magnam?",
			icons: "",
		},
	];

	return (
		<div className="MissionAndVission-section">
			<div className="container-fluid">
				<div className="flex-box">
					<div className="mission-cotent">
						<h3>Our Mission and Vission</h3>

						<div className="mission">
							{mission.map((items, index) => {
								return (
									<div className="content" key={index}>
										<span>Icons</span>
										<h4>{items.title}</h4>
										<p>{items.text}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="mission-img">
						<img src={img} alt="mission" />
					</div>
				</div>
			</div>
		</div>
	);
}
