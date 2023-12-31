import React, { useState } from "react";
import MonthlyTransition from "./MonthlyTransition";
import DailyTransition from "./DailyTransition";
import { Link } from "react-router-dom";

export default function LatestTransition() {
	const [daily, setMonthly] = useState(false);

	return (
		<div className="latest-transaction">
			<div className="title">
				<h3>Latest Transaction</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					unde obcaecati iure nesciunt odit illo dolorum, ex quia quasi
					provident!
				</p>
			</div>

			<div className="button">
				<button
					style={{
						backgroundColor: daily ? "" : "brown",
						color: daily ? "" : "white",
					}}
					onClick={(e) => {
						setMonthly(false);
					}}
				>
					Daily
				</button>

				<button
					style={{
						backgroundColor: daily ? "brown" : "",
						color: daily ? "white" : "",
						transition: ".2s",
					}}
					onClick={(e) => {
						setMonthly(true);
					}}
				>
					Monthly
				</button>
			</div>
			<div className="transaction-short-view">
				{daily ? (
					<span className={{ margin: daily ? "0 auto" : "0px" }}>
						<MonthlyTransition />
					</span>
				) : (
					<span style={{ margin: daily ? "0 auto" : "0" }}>
						<DailyTransition />
					</span>
				)}
			</div>
			<Link to={"/TotalTrans-withdraws"}>
				<p>See More Transaction {">>"} </p>
			</Link>
		</div>
	);
}
