import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import VerifiedUserList from "./VerifiedUserList";

export default function VerifiedMember() {
	return (
		<div className="verified-member-page">
			<div className="page-title">
				<h3>Our Verified Users...</h3>
			</div>
			<section>
				<div className="container-fluid verified-Users transaction-short-view">
					<div className="transaction">
						<VerifiedUserList />
						<div className="pagination">
							<Stack spacing={2}>
								<Pagination count={10} color="primary" />
							</Stack>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
