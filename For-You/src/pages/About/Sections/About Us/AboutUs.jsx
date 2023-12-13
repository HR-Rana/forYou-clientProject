import React from "react";
import img1 from "../../../../assets/images/checked.png";

export default function AboutUs() {
	return (
		<div className="aboutUs-section">
			<div className="flex-box container-fluid">
				<div className="about-left">
					<h2>About Us</h2>

					<p>
						Our Investment Company, located in Rockville, Maryland, is a full
						service real estate company that provides acquisition, development
						and finance expertise for both commercial and multi-family projects.
					</p>
					<br />
					<p>
						Our experience in structuring complicated financial transactions
						while accommodating diverse partnership interests, has allowed it to
						achieve over $1 Billion in acquisitions and financing.
					</p>
				</div>
				<div className="about-right">
					<ul>
						<span>
							<img src={img1} alt="" />
							<li>Wealth Management</li>
						</span>
						<span>
							<img src={img1} alt=" " />
							<li>Business Owners</li>
						</span>
						<span>
							<img src={img1} alt="" /> <li>Insurance & Annuities</li>
						</span>
						<span>
							<img src={img1} alt="" /> <li>Cash & Credit</li>
						</span>
					</ul>
				</div>
			</div>
		</div>
	);
}
