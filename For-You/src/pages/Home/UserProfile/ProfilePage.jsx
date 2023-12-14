import React from "react";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import ProfileContents from "./Contents/ProfileContents";

export default function ProfilePage() {
	return (
		<div className="profile-page">
			<div className="profile-page-layout">
				<ProfileSidebar />
				<ProfileContents />
			</div>
		</div>
	);
}
