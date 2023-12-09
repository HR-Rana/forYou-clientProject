import React from "react";
import img1 from '../../../assets/images/money tree.jpg'

export default function Advantage() {
	return (
		<div className="advantage-area">
			<div className="title">
				<h3>Our Bigest Advantage</h3>
				<p>
					We use the latest technologies and tools in order to create a better
					code that not only works great, but it is easy easy to work with too.
				</p>
			</div>

			<div className="flex-box">
				<div className="content">
					<h3>We are Offering 100% Money Guarantee.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam consequuntur quod, repellat error odio sint exercitationem, corrupti, tempore aut dignissimos! Recusandae earum a inventore facere! Distinctio corporis minima in!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolorem eligendi esse ducimus nemo expedita.</p>
				</div>
                <div className="advantage-img">
                    <img src={img1} alt="" />
                </div>
			</div>
		</div>
	);
}
