import React, { Component } from 'react';
import './app.css';
// Components
import Header from '../header/header.jsx';
import ItemList from '../item-list/item-list.jsx';
import PersonDetails from '../person-details/person-details.jsx';
import RandomPlanet from '../random-planet/random-planet.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="app-wrapper">
				<Header />
				<RandomPlanet />
				<ItemList />
				<PersonDetails />
			</div>
		)
	}
}