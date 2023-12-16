import React from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../../../assets/images/02.jpg";
import { Tab, TabList} from "react-tabs";

import { IoLogOut, IoNotificationsCircleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBills } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

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
					<TabList>
						<ul>
							<Tab>
								<li>
									{" "}
									<span>
										<CgProfile />
									</span>
									<NavLink to={""} />
									Profile
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<RiMoneyDollarCircleFill />
									</span>
									<NavLink to={""} />
									Running Deposit
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<FaMoneyBills />
									</span>
									<NavLink to={""} />
									Matured Deposit
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<IoNotificationsCircleSharp />
									</span>
									<NavLink to={""} />
									Notification
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<FaHistory />
									</span>
									<NavLink to={""} />
									Transaction History
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<BiMoneyWithdraw />
									</span>
									<NavLink to={""} />
									Total Widthdraw
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<AiFillBank />
									</span>
									<NavLink to={""} />
									Total Diposit
								</li>
							</Tab>
							<Tab>
								<li>
									<span>
										<FaMoneyBillTrendUp />
									</span>
									<NavLink to={""} />
									Withdraw History
								</li>
							</Tab>
						</ul>
					</TabList>
				</div>
				<ul className="sidebar-log-out">
					<li>
						<span>
							<IoLogOut />
						</span>{" "}
						<Link to={""}>Logout</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
