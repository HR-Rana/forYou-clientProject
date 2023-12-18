import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import ProfileContents from "./Contents/ProfileContents";

export default function Ash() {
	return (
		<div>
			<Tabs>
				<TabList>
					{/* <Tab>Home</Tab>
					<Tab>About</Tab>
					<Tab>Contact</Tab> */}
                    <ProfileSidebar/>
				</TabList>

				<ProfileContents></ProfileContents>
			</Tabs>
		</div>
	);
}
