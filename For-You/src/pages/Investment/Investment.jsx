import React from "react";
import img1 from "../../assets/images/02.jpg";
import img2 from "../../assets/images/03.jpg";
import img3 from "../../assets/images/04.jpg";
import { Link } from "react-router-dom";
import CalculationMainDesposit from "./Sections/CalculationMainDesposit";
import WhatIsInvest from "./Sections/whatIsInvest";

export default function Investment() {
	return (
		<div className="investment-page">
			<div className="">
				<div className="verified-member-highlights">
					<h4>
						<Link to={"/Verifired-members"}>
							<span>
								<img src={img1} alt="" />
								<img src={img2} alt="" />
								<img src={img3} alt="" />
							</span>
							<small>
								and More <span style={{ color: "red" }}>250</span> Varified
								Users
							</small>
						</Link>
					</h4>
				</div>
				<section>
					<WhatIsInvest />
				</section>
				<section>
					<CalculationMainDesposit />
				</section>
			</div>
		</div>
	);
}
