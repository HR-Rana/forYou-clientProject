import React from "react";

export default function RunningDeposit() {
	const Deposits = [
		{
			id: "01",
			title: "Silver Plan",
			invested: "09-07-2023",
			mature: "05-02-2024",
			interst: "25%",
			invest: "50",
		},
		{
			id: "02",
			title: "Platinum Plan",
			invested: "09-07-2023",
			mature: "05-02-2024",
			interst: "75%",
			invest: "1050",
		},
		{
			id: "03",
			title: "Basic Plan",
			invested: "09-07-2023",
			mature: "05-02-2024",
			interst: "75%",
			invest: "1050",
		},
		{
			id: "04",
			title: "Silver Plan",
			invested: "09-07-2023",
			mature: "05-02-2024",
			interst: "25%",
			invest: "50",
		},
		{
			id: "05",
			invest: "250",
			interst: "40%",
			title: "Gold Plan",
			invested: "09-07-2023",
			mature: "05-02-2024",
		},
		{
			id: "06",
			invest: "250",
			interst: "40%",
			title: "Basic Plan",
			invested: "09-07-2023",
			mature: "05-02-2024",
		},
	];

	return (
		<div className="Running-deposit-page">
			<div className="page-title">
				<h3>Your Running Deposits Packeges</h3>
			</div>
			<div className="Deposit-area">
				<div className="flex-box">
					{Deposits.map((items, i) => {
						const { title, invest, interst, mature, invested } = items;
						return (
							<div className="Deposits-items" key={i}>
								<span>
									<h4>{title}</h4>
								</span>
								<div className="deposit-body">
									<h5>Available Date: {mature}</h5>
									<p>Invest Date: {invested}</p>
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
					})}
				</div>
			</div>
		</div>
	);
}
