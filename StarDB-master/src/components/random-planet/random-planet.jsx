import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spiner/spinner.jsx';

export default class RandomPlanet extends Component {
	constructor () {
		super();
		this.swapiService = new SwapiService();
		this.updatePlanet();
	}
	
	state = {
		id: null,
		name: null,
		population: null,
		rotationPeriod: null,
		diameter: null,
		loading: true,
	}

	updatePlanet = () => {
		let id = Math.floor( Math.random() * 25 ) + 2;
		this.swapiService.getPlanet(id)
		.then( (planet) => {
			this.setState({
				id,
				name: planet.name,
				population: planet.population,
				rotationPeriod: planet.rotation_period,
				diameter: planet.diameter,
				loading: false,
			})
		})
	}


	render() {
		const { id, name, population, rotationPeriod, diameter, loading } = this.state; 

		if (loading) {
			return <Spinner />
		}
		
		
		return (
			<section className="random-planet-wrapper">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="random-planet-img"/>

				<div className="clean"></div>

				<ul className="random-planet-list">
				<li className="random-planet-list__item">{`Name: ${name}`}</li>
					<li className="random-planet-list__item">{`Population: ${population}`}</li>
					<li className="random-planet-list__item">{`Rotation period: ${rotationPeriod}`}</li>
					<li className="random-planet-list__item">{`Diameter: ${diameter}`}</li>
				</ul>

				<button onClick={ () => this.updatePlanet() } className="update-planet">Update planet</button>
			</section>
		)
	}
}