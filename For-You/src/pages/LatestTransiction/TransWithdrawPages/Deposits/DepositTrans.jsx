import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import MonthlyTransition from "../../MonthlyTransition";
import DailyTransition from "./../../DailyTransition";

export default function DepositTrans() {
	const [DHistory, setDHistory] = useState(false);

	return (
		<div className="Deposit-transaction-history">
			<div className="container-fluid">
				<div className="title">
					<h3>Latest Public Deposit history</h3>
				</div>
				<div className="history-box">
					<div className="button">
						<button
							onClick={(e) => {
								setDHistory(false);
							}}
							style={{
								backgroundColor: DHistory ? "" : "brown",
								color: DHistory ? " " : "white",
							}}
						>
							Last Week
						</button>
						<button
							onClick={(e) => {
								setDHistory(true);
							}}
							style={{
								backgroundColor: DHistory ? "brown" : "",
								color: DHistory ? "white" : "",
							}}
						>
							Last 30 Days
						</button>
					</div>
					<div className="deposits-components transaction-short-view">
						{DHistory ? <MonthlyTransition /> : <DailyTransition />}
					</div>
					<div className="pagination">
						<Stack spacing={2}>
							<Pagination count={10} color="primary" />
						</Stack>
					</div>
				</div>
			</div>
		</div>
	);
}
