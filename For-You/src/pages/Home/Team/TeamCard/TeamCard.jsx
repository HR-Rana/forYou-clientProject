import React from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TeamCard(props) {
	const { name, id, designation, facebook, linkedin, instagram, twitter, img } =
		props;



	return (
		<div className="member-card" title="Member">
			<div className="card">
				<div className="card-header">
					<span>
						<img src={img} alt="" />
					</span>
				</div>
				<div className="card-body">
					<h4>Name: {name}</h4>
					<p>{designation}</p>
				</div>
				<div className="card-footer">
					<span>
						<FontAwesomeIcon icon="fa-brands fa-square-facebook" />
						facebook
					</span>
				</div>
			</div>
		</div>
	);
}
