import React from "react";
import CountUp from "react-countup";
import Withdraw from './../../Withdraw/Withdraw';

export default function ProjectDone() {
	return (
		<div className="Project-done-section flex-box">
			<div className="total-investor">
				<h3>
					<CountUp end={1000} />
				</h3>
                <p>Total Investor</p>
			</div>
			<div className="total-investor">
				<h3>
					<CountUp end={10000} />
				</h3>
                <p>Last Week Deposit</p>
			</div>
			<div className="total-investor">
				<h3>
					<CountUp end={26000} />
				</h3>
                <p>Total Deposit Balance</p>
			</div>
			<div className="total-investor">
				<h3>
					<CountUp end={6000} />
				</h3>
                <p>Total Withdrawal Amount</p>
			</div>
		</div>
	);
}
