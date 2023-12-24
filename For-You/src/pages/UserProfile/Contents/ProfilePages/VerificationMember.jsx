import React from "react";

export default function VerificationMember() {
	return (
		<div className="verified-membership-page">
			<div className="page-title">
				<h3>Membership Verification Page</h3>
			</div>
			<section>
				<div className="container-fluid">
					<h3></h3>
				</div>
			</section>

            <section className="verification-form-section">
                <div className="container-fluid">
                    <div className="verification-form">
                        <h4>Your NID Card information</h4><br />
                        <form>
                            <input type="text" placeholder="Write NID Name" />
                            <input type="number" placeholder="Write NID Number" />
                            <input type="submit" value="Requtest to Verify" />
                        </form>

                    </div>
                </div>
            </section>
		</div>
	);
}
