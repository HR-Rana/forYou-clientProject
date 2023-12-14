import React from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../../../assets/images/02.jpg";
import Withdraw from "./../../../Withdraw/Withdraw";

export default function ProfileSidebar() {
	return (
		<div className="ProfileSidebar">
			<div className="sidebar-box">
				<div className="user-name">
					<span>
						<img src={profile} alt="profile" />
					</span>
					<h4>User Name</h4>
				</div>

				<div className="profile-nav">
					<ul>
						<li>
							<NavLink to={""} />
							Profile
						</li>
						<li>
							<NavLink to={""} />
							Running Deposit
						</li>
						<li>
							<NavLink to={""} />
							Matured Deposit
						</li>
						<li>
							<NavLink to={""} />
							Notification
						</li>
						<li>
							<NavLink to={""} />
							Transaction History
						</li>
						<li>
							<NavLink to={""} />
							Total Widthdraw
						</li>
						<li>
							<NavLink to={""} />
							Total Diposit
						</li>
						<li>
							<NavLink to={""} />
							Withdraw History
						</li>
					</ul>

					<ul>
						<Link to={""}>Logout</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
