import React from "react";

export default function NotifyCard({date,Class, title, amount}) {
	return (
		<div className={`transactions ${Class}`}>
			<span>
				<p>Date:{date}</p>
			</span>
			<div className="body">
				<h4>{title}</h4>
				<p>
					Your {title} amount is {amount} Successfully Finished..
				</p>
			</div>
		</div>
	);
}
