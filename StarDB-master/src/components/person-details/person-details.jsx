import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
	render() {
		return (
			<section className="person-details-wrapper">
				<img src="http://rocksteady.space/uploads/posts/2016-09/1474743556-927189671-zvezdnye-voyny-probuzhdenie-sily-3.jpg" alt="" className="person-img"/>
		         <div className="clean"></div>
		         <ul className="person-details">
		         		<li className="person-details__item">Some person details</li>
		         		<li className="person-details__item">Some person details</li>
		         		<li className="person-details__item">Some person details</li>
		         	</ul>	
			</section>
		)
	}
}