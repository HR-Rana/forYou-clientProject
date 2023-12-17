import React from "react";
import {
	FaFacebookSquare,
	FaInstagram,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
						<Link to={""}>
							<FaFacebookSquare />
						</Link>
					</span>
					<span>
						<Link to={""}>
							<FaInstagram />
						</Link>
					</span>
					<span>
						<Link to={""}>
							<FaLinkedin />
						</Link>
					</span>
					<span>
						<Link to={""}>
							<FaTwitterSquare />
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
