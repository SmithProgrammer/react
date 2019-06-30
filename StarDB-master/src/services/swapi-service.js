export default class SwapiService {
    
    constructor() {
        this.url = `https://swapi.co/api/`;
    }
    
    
    async getResource(url) {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Error! Response status: ${res.status}`);
        }
        
        return await res.json();
    }
    
    
    async getAllPeople() {
        const res = await this.getResource(`${this.url}people/`);
        return res.results;
    }
    
     async getAllPlanets() {
        const res = await this.getResource(`${this.url}planets/`);
        return res.results;
    }
    
    
    async getAllStarships() {
        const res = await this.getResource(`${this.url}starships/`);
        return res.results;
    }
    
    
    
    async getPerson(id) {
        const res = this.getResource(`${this.url}people/${id}/`);
        return res;
    }
    
     async getStarship(id) {
        const res = this.getResource(`${this.url}starships/${id}/`);
        return res;
    }
    
    async getPlanet(id) {
        const res = this.getResource(`${this.url}planets/${id}/`);
        return res;
    }
}

// USING: 
// const swapi = new SwapiService();

// swapi.getAllPeople().then( (data) => {
//   data.forEach( function (person) {
//     console.log( person.name );
//   })
// })

// swapi.getStarship(2).then( (res) => { console.log(`starship: ${res.name}`) });