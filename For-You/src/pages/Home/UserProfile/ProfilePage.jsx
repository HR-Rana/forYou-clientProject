import React from "react";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import ProfileContents from "./Contents/ProfileContents";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";


export default function ProfilePage() {
	return (
		<div className="profile-page">
			<div className="profile-page-layout">
				<Tabs>
					<TabList>
						{/* <ProfileSidebar /> */}
						<Tab>
							<p>home 1</p>
						</Tab>
						<Tab>
							<p>home 2</p>
						</Tab>
						<Tab>
							<p>home 3</p>
						</Tab>
					</TabList>
					{/* <ProfileContents /> */}

					<TabPanel>
						<h3>hello world 1</h3>
					</TabPanel>
					<TabPanel>
						<h3>hello world 2</h3>
					</TabPanel>
					<TabPanel>
						<h3>hello world 3</h3>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
}
