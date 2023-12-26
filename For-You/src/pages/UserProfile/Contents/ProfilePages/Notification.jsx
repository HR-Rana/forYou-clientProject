import React from "react";
import NotifyCard from "../NotifyCard";

export default function Notification() {
	const Notification = [
		{
			id: "01",
			title: "withdraw",
			amount: "$250",
			date: "26-12-2023",
		},
		{
			id: "02",
			title: "Verification Process",
			amount: "",
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
		<div className="notification-page">
			<div className="page-title">
				<h3>Notications</h3>
			</div>
			<div className="notification-box">
				{Notification.map((items, i) => {
        const {date, title, amount } = items;
					return <NotifyCard
              date={date}
              amount={amount}
              title={title}
              Class={"Notification"}
           />;
				})}
			</div>
		</div>
	);
}
