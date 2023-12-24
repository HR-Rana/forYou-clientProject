import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function ProjectDone() {
	const [count, setCount] = useState(false);
	return (
		<ScrollTrigger
			onEnter={() => setCount(true)}
			onExit={() => {
				setCount(false);
			}}
		>
			{count && (
				<div className="Project-done-section">
					<div className="flex-box container-fluid">
						<div className="total-investor">
							<h3>
								<CountUp end={1000} />
							</h3>
							<p>Total Investor</p>
						</div>
						<div className="total-investor">
							<h3>
								$
								<CountUp end={10000} />
							</h3>
							<p>Last Week Deposit</p>
						</div>
						<div className="total-investor">
							<h3>
								$
								<CountUp end={26000} />
							</h3>
							<p>Total Deposit Balance</p>
						</div>
						<div className="total-investor">
							<h3>
								$
								<CountUp end={6000} />
							</h3>
							<p>Users total Withdrawn</p>
						</div>
					</div>
				</div>
			)}
		</ScrollTrigger>
	);
}
