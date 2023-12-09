import React from "react";
import { Link } from "react-router-dom";

export default function AboutTerms() {
	const termData = [
		{
			id: "01",
			title: "We're Innovative",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, voluptatem voluptatibus iusto officiis itaque amet fugit!",
			link: "",
		},
		{
			id: "02",
			title: "We're Professional",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, voluptatem voluptatibus iusto officiis itaque amet fugit!",
			link: "",
		},
		{
			id: "03",
			title: "Licensed and Certified",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, voluptatem voluptatibus iusto officiis itaque amet fugit!",
			link: "",
		},
		{
			id: "04",
			title: "Saving & Investments",
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, voluptatem voluptatibus iusto officiis itaque amet fugit!",
			link: "",
		},
	];
	return (
		<div className="About-terms">
			<div className="container-fluid">
				<div className="title">
					<h2>About Terms</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						amet incidunt alias ratione, ex, architecto officiis nobis vel, ab
						molestiae eos! Dolorem natus recusandae ratione.
					</p>
				</div>
				<div className="flex-box">
					{termData.map((items, index) => {
						const { title, desc, link } = items;
						return (
							<div className="term-content" key={index}>
								<h3>{title}</h3>
								<p>{desc}</p>
								<p>
									<Link to={link}>Read More</Link>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
