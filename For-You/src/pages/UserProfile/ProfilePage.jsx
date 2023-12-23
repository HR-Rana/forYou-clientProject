import React from "react";
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
import Deposits from "./Contents/ProfilePages/Deposits";
import WithdrawHistory from "./Contents/ProfilePages/WithdrawHistory";

import './Contents/ProfilePage.css'

export default function ProfilePage() {
	return (
		<div className="profile-page">
			<div className="profile-page-layout">
				<Tabs>
					<TabList>
						<div className="sidebar-box">
							<div className="user-name">
								<span>
									<img src={profile} alt="profile" />
								</span>
								<h4>User Name</h4>
							</div>

							<div className="profile-sidebar-nav">
								<ul>
									<Tab>
										<li>
											<NavLink>
												<span>
													<CgProfile />
												</span>
												Profile
											</NavLink>{" "}
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<RiMoneyDollarCircleFill />
												</span>
												Running Deposit
											</NavLink>
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<FaMoneyBills />
												</span>
												Matured Deposit
											</NavLink>
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<IoNotificationsCircleSharp />
												</span>
												Notification
											</NavLink>
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<FaHistory />
												</span>
												Transaction History
											</NavLink>
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<BiMoneyWithdraw />
												</span>
												Total Widthdraw
											</NavLink>
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<AiFillBank />
												</span>
												Total Diposit
											</NavLink>
										</li>
									</Tab>
									<Tab>
										<li>
											<NavLink>
												<span>
													<FaMoneyBillTrendUp />
												</span>
												Withdraw History
											</NavLink>
										</li>
									</Tab>
								</ul>
							</div>
							<ul className="sidebar-log-out">
								<li>
									<Link>
										<span>
											<IoLogOut />
										</span>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</TabList>
					<div className="ProfilePage-Contents">
						<TabPanel>
							<Profile />
						</TabPanel>
						<TabPanel>
							<RunningDeposit />
						</TabPanel>
						<TabPanel>
							<MaturedDeposit />
						</TabPanel>
						<TabPanel>
							<Notification />
						</TabPanel>
						<TabPanel>
							<TransactionHistory />
						</TabPanel>
						<TabPanel>
							<WithdrawHistory />
						</TabPanel>
						<TabPanel>
							<Deposits />
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
