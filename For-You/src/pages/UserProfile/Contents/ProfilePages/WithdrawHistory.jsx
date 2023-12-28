import React from 'react'
import NotifyCard from '../NotifyCard';

export default function WithdrawHistory() {
  const Withdraw = [
		{
			id: "01",
			title: "withdraw",
			amount: "$1220",
			date: "28-12-2023",
		},
		{
			id: "02",
			title: "withdraw",
			amount: "$50",
			date: "28-12-2023",
		},
		{
			id: "03",
			title: "withdraw",
			amount: "$100",
			date: "26-12-2023",
		},
		{
			id: "04",
			title: "withdraw",
			amount: "$400",
			date: "28-12-2023",
		},
		{
			id: "05",
			title: "withdraw",
			amount: "$600",
			date: "28-12-2023",
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
						{Withdraw.map((data, i) => {
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
