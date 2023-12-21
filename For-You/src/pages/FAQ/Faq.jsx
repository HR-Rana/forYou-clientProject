import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import img from '../../assets/images/faq_graphic.jpg'

export default function Faq() {
	const [openFaq, setOff] = useState(0);

	const Faqs = [
		{
			id: "01",
			qus: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum veritatis sit a obcaecati totam illo voluptas est dolore. Voluptatibus explicabo minima tenetur quos corrupti voluptatem illo accusamus sapiente numquam.",
		},
		{
			id: "02",
			qus: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum veritatis sit a obcaecati totam illo voluptas est dolore. Voluptatibus explicabo minima tenetur quos corrupti voluptatem illo accusamus sapiente numquam.",
		},
		{
			id: "03",
			qus: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum veritatis sit a obcaecati totam illo voluptas est dolore. Voluptatibus explicabo minima tenetur quos corrupti voluptatem illo accusamus sapiente numquam.",
		},
		{
			id: "04",
			qus: "Lorem ipsum dolor sit amet consectetur adipisicing.",
			ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum veritatis sit a obcaecati totam illo voluptas est dolore. Voluptatibus explicabo minima tenetur quos corrupti voluptatem illo accusamus sapiente numquam.",
		},
	];

	return (
		<div className="Faq-section">
			<div className="container-fluid">
				<div className="flex-box">
					<div className="Faq-box">
						<h3>Frequently Ask Question!</h3>
						<div className="faq">
							{Faqs.map((items, index) => {
								return (
									<div className="questionAndAnswer" key={index}>
										<span
											onClick={(e) => {
												setOff(!openFaq);
											}}
										>
											<h4>
												{items.qus} <span style={{transform:openFaq? "trasnlate(180deg)" : "", color:"brown"}}><FaAngleDown/></span>
											</h4>
										</span>
										{openFaq ? <p>{items.ans}</p> : ""}
									</div>
								);
							})}
						</div>
					</div>

                    <div className="Faq-img">
                        <img src={img} alt="faq-img" />
                    </div>
				</div>
			</div>
		</div>
	);
}
