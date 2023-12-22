import React from "react";
import DepositTrans from "./TransWithdrawPages/Deposits/DepositTrans";
import WithdrawTrans from "./TransWithdrawPages/Withdraw/WithdrawTrans";

export default function TotalTransAndWithdraw() {
	return (
		<div className="total-transaction-withdraw-page">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
				laboriosam recusandae labore molestiae modi sapiente sequi beatae error
				aliquam harum!
			</p>
			<section>
				<DepositTrans />
			</section>
			<section>
				<WithdrawTrans />
			</section>
		</div>
	);
}
