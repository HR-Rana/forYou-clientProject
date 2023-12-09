import React from "react";
import img1 from '../../../assets/images/add-user.png'
import img3 from '../../../assets/images/return-on-investment.png'
import img2 from '../../../assets/images/profits.png'

export default function HowWorks() {
	const WorkData = [
		{
			id: "01",
			title: "Create Account",
			text: "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting",
			icon: img1,
		},
		{
			id: "02",
			title: "Start Investing",
			text: "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting",
			icon: img2,
		},
		{
			id: "03",
			title: "Get Profit",
			text: "Clarinet accustomed. Would legs of framework officers. We've to morning like a contracting",
			icon: img3,
		},
	];

	return (
		<div className="how-it-works-section">
			<div className="container-fluid">
				<div className="title">
					<h3>How Does it works</h3>
					<p>
						We use the latest technologies and tools in order to create a better
						code that not only works great, but it is easy easy to work with
						too.!
					</p>
				</div>
				<div className="flex-box It-work-system">
                    {
                        WorkData.map((items, index)=>{
                            const {icon, text, title}= items;
                            return(
                                <div className="work-content">
                                    <span>
                                        <img src={icon} alt="icon" />
                                    </span>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }
                </div>
			</div>
		</div>
	);
}
