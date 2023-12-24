import React from "react";
import img1 from "../../../assets/images/01.jpg";
import img2 from "../../../assets/images/02.jpg";
import img3 from "../../../assets/images/03.jpg";
import img4 from "../../../assets/images/04.jpg";
import img5 from "../../../assets/images/05.jpg";
import img6 from "../../../assets/images/06.jpg";
import img7 from "../../../assets/images/07.jpg";
import img8 from "../../../assets/images/08.jpg";
import img9 from "../../../assets/images/09.jpg";
import img10 from "../../../assets/images/10.jpg";

export default function VerifiedUserList() {
	return (
		<div className="verified-user-card ">
			<span>
				<h3>
					Total <span>256</span> Members are Verified.
				</h3>
			</span>
			<table>
				<thead>
					<th>Name</th>
					<th>Date</th>
					<th>Status</th>
					<th>Country</th>
				</thead>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img1} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 31-11-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5> England</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img2} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 04-11-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5> Bangladesh</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img3} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 02-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5>Saudi Arabia</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img4} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5> Bangladesh</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img5} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5>Italy</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img6} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5> Bangladesh</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img7} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5> Bangladesh</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img8} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5>Germany</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img9} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5> Bangladesh</h5>
					</td>
				</tr>
				<tr>
					<td>
						<div className="flex name">
							<span>
								<img src={img10} alt=" " />
							</span>
							<h5> Jim Adams</h5>
						</div>
					</td>
					<td>
						<div className="date">
							<h5> 06-12-2023</h5>
						</div>
					</td>
					<td>
						<h5> Verified</h5>
					</td>
					<td>
						<h5>Poland</h5>
					</td>
				</tr>
			</table>
		</div>
	);
}
