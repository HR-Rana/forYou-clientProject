import React from "react";
import NotifyCard from "../NotifyCard";

export default function TransactionHistory() {
	const Transactions = [
		{
			id: "01",
			title: "withdraw",
			amount: "$250",
			date: "20-12-2023",
		},
		{
			id: "02",
			title: "deposit",
			amount: "$250",
			date: "20-12-2023",
		},
		{
			id: "03",
			title: "withdraw",
			amount: "$250",
			date: "21-12-2023",
		},
		{
			id: "04",
			title: "Deposit",
			amount: "$250",
			date: "21-12-2023",
		},
		{
			id: "05",
			title: "Deposit",
			amount: "$250",
			date: "22-12-2023",
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
						<NotifyCard
							date={date}
							title={title}
							amount={amount}
							Class={"Transaction"}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
}
