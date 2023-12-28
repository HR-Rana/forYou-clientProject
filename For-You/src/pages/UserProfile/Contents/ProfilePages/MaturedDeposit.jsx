import React from "react";
import { Deposits } from "../WithdrawFakeData/WithdrawData";
import DepositCard from "../DepositCard";

export default function MaturedDeposit() {
	return (
		<div className="matureDeposit-page">
			<div className="page-title">
				<h3>Matured Deposits</h3>
			</div>

			<div className="pending-for-withdraw">
				<div className="Deposit-area">
					<div className="flex-box">
						{Deposits.map((items, i) => {
							const { title, invest, interst, invested, duration } =
								items;
							return (
								<div className="Deposits-items" key={i}>
									<DepositCard
										title={title}
										interst={interst}
										invest={invest}
										mature={'Availble'}
										invested={invested}
										duration={duration}
										withdraw={"- available for withdraw"}
									></DepositCard>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
