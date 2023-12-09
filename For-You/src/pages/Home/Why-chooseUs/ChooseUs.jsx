import React from "react";
import img from "../../../assets/images/coins.jpg";

export default function ChooseUs() {
	return (
		<div className="why-choose-us">
			<div className="title"></div>

			<div className="content flex-box">
				<div className="img">
					<img src={img} alt="" />
				</div>
				<div className="text-content">
					<h2>Why Choose us?</h2>
					<ul>
						<li>100% Secure Invest and Moneyback Gauarantee.</li>
						<li>Verified by Bangladesh Governement</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
