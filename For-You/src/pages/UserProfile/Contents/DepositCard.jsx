import React from "react";
import Withdraw from "./../../Withdraw/Withdraw";

export default function DepositCard(props) {
	const { title, mature, invested, duration, invest, interst, withdraw } =
		props;
	return (
		<div className="Deposit-card">
			<span>
				<h4>
					{title} <span style={{color:'green'}}>{withdraw}</span>
				</h4>
			</span>
			<div className="deposit-body">
				<h5>Available Date: {mature}</h5>
				<p>Invest Date: {invested}</p>
				<p>Duration: {duration} deposit</p>
				<p>
					invested: <span> ${invest}</span>
				</p>
				<p>
					Interst Rate:
					<span> {interst}</span>
				</p>
			</div>
			<div className="buttons">
				<button>Interst Widthdraw</button>
				<button>Widthdraw Deposit</button>
			</div>
		</div>
	);
}
