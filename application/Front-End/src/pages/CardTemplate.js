import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TutorInfo from "./TutorInfo";

function CardTemplate({ result }) {

    let navigate = useNavigate();
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	};
        
	if (result == null) {
		return (
			<Fragment>
				
				<div className="CardStyle2">
					<div className="card-left">
						<img
							src={require("../images/sillouette.jpg")} 
							alt="EMPTY"
							className="proPic"
						/>
					</div>
					<div className="card-right">
						<div className="cardText">
							<h2>
								<i>Full Name</i>
							</h2>
							<h3>
								<i>Profession</i>
							</h3>
							<i>Description</i>
							<br></br>
						</div>
						<div className="buttonHold">
							<button className="cardbutton" onClick={routeChange}>
								Contact
							</button>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
        }

export default CardTemplate;
