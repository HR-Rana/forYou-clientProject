import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function WithdrawTrans() {
	return (
		<div className="totalWithdraw-history">
			<div className="container-fluid">
				<div className="title">
					<h3>Total Public Withdraws</h3>
				</div>
				<div className="widthdraws-box">
					<div className="button">
						<button type="">Last Week</button>
						<button type="">Last month</button>
					</div>
					<div className="widthraws-components">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
						qui assumenda magnam tenetur unde odit architecto vitae! Atque
						soluta mollitia sunt, non exercitationem aperiam, voluptates
						laudantium hic quaerat illum quasi!
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
