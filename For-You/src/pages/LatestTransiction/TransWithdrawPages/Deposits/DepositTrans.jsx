import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function DepositTrans() {
	return (
		<div className="Deposit-transaction-history">
			<div className="container-fluid">
				<div className="title">
					<h3>Latest Public Deposit history...</h3>
				</div>
				<div className="history-box">
					<div className="buttons">
						<button>Last Week</button>
						<button>Last Month</button>
					</div>
					<div className="deposits-components">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
						inventore architecto veritatis aut vero unde, quam cumque optio
						totam beatae?
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
