import React from "react";
import DepositCard from "../DepositCard";
import { Deposits } from "../WithdrawFakeData/WithdrawData";

export default function RunningDeposit() {
	

	return (
		<div className="Running-deposit-page">
			<div className="page-title">
				<h3>Your Running Deposits Packeges</h3>
			</div>
			<div className="Deposit-area">
				<div className="flex-box">
					{Deposits.map((items, i) => {
						const { title, invest, interst, mature, invested, duration } = items;
						return (
							<div className="Deposits-items" key={i}>
								<DepositCard
									title={title}
									interst={interst}
									invest={invest}
									mature={mature}
									invested={invested}
									duration={duration}
									
								></DepositCard>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
