import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {
	render() {
		return (
			<section>
				<ul className="list">
					<li className="list__item">Some Name</li>
					<li className="list__item">Some Name</li>
					<li className="list__item">Some Name</li>
					<li className="list__item">Some Name</li>
					<li className="list__item">Some Name</li>
				</ul>
			</section>
		)
	}
}