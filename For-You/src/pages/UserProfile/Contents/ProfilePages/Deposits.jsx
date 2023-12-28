import React from "react";
import NotifyCard from "../NotifyCard";

export default function Deposits() {
	const Diposits = [
		{
			id: "01",
			title: "Deposit",
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
			title: "Deposit",
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
		<div className="Deposit-page">
			<div className="page-title">
				<h3>Deposit Page</h3>
			</div>

			<div className="deposit-history">
				<div className="contianer-fluid">
					<div className="deposit-history-box">
						{Diposits.map((data, i) => {
							const { title, date, amount } = data;
							return (
								<div className="" key={i}>
									<NotifyCard
										Class={"deposit"}
										title={title}
										amount={amount}
                    date={date}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
