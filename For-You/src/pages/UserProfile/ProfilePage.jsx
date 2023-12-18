import React from "react";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import ProfileContents from "./Contents/ProfileContents";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/images/02.jpg";
import { CgProfile } from "react-icons/cg";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaMoneyBillTrendUp, FaMoneyBills } from "react-icons/fa6";
import { IoLogOut, IoNotificationsCircleSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
import Profile from "./Contents/ProfilePages/Profile";
import TransactionHistory from "./Contents/ProfilePages/TransactionHistory";
import MaturedDeposit from "./Contents/ProfilePages/MaturedDeposit";
import RunningDeposit from "./Contents/ProfilePages/RunningDeposit";
import LoanTransaction from "./Contents/ProfilePages/LoanTransaction";
import Notification from "./Contents/ProfilePages/Notification";

export default function ProfilePage() {
	return (
		<div className="profile-page">
			<div className="profile-page-layout">
				<Tabs>
					<TabList>
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
					</TabList>

					<div>
						<TabPanel>
							<Profile />
						</TabPanel>
						<TabPanel>
							<TransactionHistory />
						</TabPanel>
						<TabPanel>
							<MaturedDeposit />
						</TabPanel>
						<TabPanel>
							<Notification />
						</TabPanel>
						<TabPanel>
							<RunningDeposit />
						</TabPanel>
						<TabPanel>
							<RunningDeposit />
						</TabPanel>
						<TabPanel>
							<LoanTransaction />
						</TabPanel>
					</div>
				</Tabs>
			</div>
		</div>
	);
}
