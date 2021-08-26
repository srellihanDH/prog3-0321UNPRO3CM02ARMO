import React, {Component} from 'react'
import Card from '../Card/Card'

const info = [  
    {
        img: 'ahsoka.jpg',
        name: 'Ashoka',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    }, 
    {
        img: 'anakin.jpg',
        name: 'Anakin',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },
    {
        img: 'batman.jpg',
        name: 'Batman',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'DC Comics',  
    },
    {
        img: 'hulkSmall.jpg',
        name: 'Hulk',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'Marvel',
    },
    {
        img: 'kyloRen.jpg',
        name: 'Kylo Ren',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },       
]; 
    
class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <h3 className="h3"> Personajes de películas</h3>
                <div className="row card-container">
                {/* Aquí van las tarjetas de cada personaje */}
                { info.map((character, idx) =>                 <Card image={`/assets/images/characters/${character.img}`} name={character.name} description={character.description} extra={character.extra} key={idx+character.name} />) }
                {/* Fin zona de tarjetas de cada personaje */}
                </div>
            </>
        )
    }
}

export default Characters;