import React from "react";
import OfferCard from "./OfferCard/OfferCard";

export default function InvestOffer() {
	return (
		<div className="investment-offerSection">
			<div className="container-fluid">
				<div className="title">
					<h3>We're offering to you</h3>
				</div>

				<div className="">
					<div className="offer-card-box flex-box">
						<div className="Silver-offer  offer">
							<OfferCard
								interst={"25%"}
								amount={"250"}
								title={"Silver Package"}
                                  month={"3-months"}
							></OfferCard>
						</div>
						<div className="Gold-offer offer">
							<OfferCard
								interst={"45%"}
								amount={"550"}
								title={"Gold Package"}
                                month={"6-months"}
							></OfferCard>
						</div>
						<div className="Platinum-offer offer">
							<OfferCard
								interst={"75%"}
								amount={"1050"}
								title={"Platinum Package"}
                                  month={"1-Year"}
							></OfferCard>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
