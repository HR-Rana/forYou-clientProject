import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import MonthlyTransition from "../../MonthlyTransition";
import DailyTransition from "../../DailyTransition";

export default function WithdrawTrans() {
	const [WHistory, setWHistory] = useState(true);
	return (
		<div className="totalWithdraw-history">
			<div className="container-fluid">
				<div className="title">
					<h3>Total Public Withdraws</h3>
				</div>
				<div className="widthdraws-box">
					<div className="button">
						<button
							onClick={(e) => setWHistory(false)}
							style={{
								backgroundColor: !WHistory ? "brown" : " ",
								color: WHistory ? " " : "white",
							}}
						>
							Last Week
						</button>
						<button
							onClick={(e) => {
								setWHistory(true);
							}}
							style={{
								backgroundColor: WHistory ? "brown" : "",
								color: WHistory ? "white" : "",
							}}
						>
							Last 30Days
						</button>
					</div>
					<div className="widthraws-components transaction-short-view">
						{WHistory ? <MonthlyTransition /> : <DailyTransition />}
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
