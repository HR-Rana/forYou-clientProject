import React from "react";

export default function TransactionHistory() {
	const Transactions = [
		{
			id: "01",
			title: "withdraw",
			amount: "$250",
			date: "26-12-2023",
		},
		{
			id: "02",
			title: "deposit",
			amount: "$250",
			date: "26-12-2023",
		},
		{
			id: "03",
			title: "withdraw",
			amount: "$250",
			date: "26-12-2023",
		},
		{
			id: "04",
			title: "Deposit",
			amount: "$250",
			date: "26-12-2023",
		},
		{
			id: "05",
			title: "Deposit",
			amount: "$250",
			date: "26-12-2023",
		},
	];

	return (
		<div className="transation-history-page">
			<div className="page-title">
				<h3>Transactions History</h3>
			</div>

			<div className="transaction-box">
				{Transactions.map((items, i) => {
					const { date, title, amount } = items;
					return (
						<div className="transactions" key={i}>
							<span>
								<p>Date:{date}</p>
							</span>
							<div className="body">
								<h4>{title}</h4>
								<p>
									Your {title} amount is {amount} Successfully Finished..
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
