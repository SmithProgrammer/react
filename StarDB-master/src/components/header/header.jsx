import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
			<span className="logo">Star DB</span>
				<nav>
					<ul className="nav">
						<li className="nav__item">People</li>
						<li className="nav__item">Planets</li>
						<li className="nav__item">Starships</li>
					</ul>
				</nav>
			</header>
		)
	}
}