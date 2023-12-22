import React from "react";
import DepositTrans from "./TransWithdrawPages/Deposits/DepositTrans";
import WithdrawTrans from "./TransWithdrawPages/Withdraw/WithdrawTrans";

export default function TotalTransAndWithdraw() {
	return (
		<div className="total-transaction-withdraw-page">
			<section>
				<DepositTrans />
			</section>
			<section>
				<WithdrawTrans />
			</section>
		</div>
	);
}
