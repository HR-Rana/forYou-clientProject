import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function VerificationMember() {
	return (
		<div className="verified-membership-page">
			<div className="page-title">
				<h3>Membership Verification Page</h3>
			</div>

			<section className="verification-form-section">
				<div className="container-fluid">
					<Tabs>
						<TabList>
							<Tab>Verify with NID</Tab>
							<Tab>Verify With Passport</Tab>
							<Tab>Verify With Driving Lisence</Tab>
						</TabList>

						<TabPanel>
							<div className="verification-form">
								<h4>Type Your NID Card information</h4>
								<br />
								<form>
									<input type="text" placeholder="Write NID Name" />
									<input type="number" placeholder="Write NID Number" />
									<input type="text" placeholder="Nationality " />
									<input type="submit" value="Requtest to Verify" />
								</form>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="verification-form">
								<h4>Type Your Passport information</h4>
								<br />
								<form>
									<input type="text" placeholder="NID Name" />
									<input type="number" placeholder="Passport Number" />
									<input type="text" placeholder="Nationality " />
									<input type="submit" value="Requtest to Verify" />
								</form>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="verification-form">
								<h4>Type Your Driving Lisence information</h4>
								<br />
								<form>
									<input type="text" placeholder="Your Lisence Name" />
									<input type="number" placeholder="Lisence Number" />
									<input type="text" placeholder="Nationality " />
									<input type="submit" value="Requtest to Verify" />
								</form>
							</div>
						</TabPanel>
					</Tabs>
				</div>
			</section>
		</div>
	);
}
