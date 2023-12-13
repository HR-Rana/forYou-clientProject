import React from "react";
import img from "../../../assets/images/—Pngtree—customer service staff contact us_5410602.png";
import Form from "./Form";

export default function ContactForm() {
	return (
		<div className="contact-form-secton">
			<div className="container-fluid">
				<div className="flex-box">
					<div className="left-img">
						<img src={img} alt="" />
					</div>
					{/* contact form */}
					<div className="right-form">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}
