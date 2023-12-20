import React from "react";
import { Link } from "react-router-dom";

export default function CalculationMainDesposit() {
	return (
		<div className="calcultation-deposit-interest">
			<div className="container-fluid">
				<div className="flex-box">
					<div className="aboutInvestCommission">
						<h3>Our Basic Interst Rate</h3>
						<br />
						<p>
						  Hey!, we have been Providing 2 kind of interst base on investment for month or year. there is our Basic Interst Rate is <span>{"05%"}</span> on every Investment, and other one is, sometimes we provide several offer About Investment. So Let's have look here how much you will get Profit by your Imagination Investment amount with our basic normal interst rate..let's check it to The Input boxs..
						</p>
					</div>
					<div className="calculate-invest-commission">
						<span className="calculation-inputs">
							<div className="amount">
								<input
									type="number"
									placeholder="Type any Amount"
								/>
							</div>
							<div className="month">
								<select
									onChange={(e) => {
										console.log(e.target.value);
									}}
								>
									<option disabled>
										<span>Select a Option</span>
									</option>
									<option value="3 months">
										<span>3-Months</span>
									</option>
									<option value="6 months">
										<span>6-Months</span>
									</option>
									<option value="1 year">
										<span>1-year</span>
									</option>
								</select>
							</div>
						</span>
						<div>
							<p>
								Total Amount is <span>$560</span> your Investment With Interst
								for <span>6Months</span>
							</p>
						</div>

						<span>
							<Link to={""}>
								<button>Let's start an Invest</button>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
