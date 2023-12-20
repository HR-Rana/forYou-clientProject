import React from "react";
import { Link } from "react-router-dom";

export default function CalculationMainDesposit() {
	return (
		<div className="calcultation-deposit-interest">
			<div className="container-fluid">
				<div className="flex-box">
					<div className="aboutInvestCommission">
						<h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
						<br />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloribus, odit. A alias ipsam unde, magni non quo quod in
							sapiente ratione iure dolorem ea repellat suscipit delectus
							doloremque. Ab, debitis!
						</p>
					</div>
					<div className="calculate-invest-commission">
						<span className="calculation-inputs">
							<div className="amount">
								<input
									type="number"
									placeholder="type any amount of Investment"
								/>
							</div>
							<div className="month">
								<select
									onChange={(e) => {
										console.log(e.target.value);
									}}
								>
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
