import React from 'react';

// import './StarWars.css'

const Character = props => {
    return <li>{props.character.name} - <span className = "hair-style">Hair-Status: {props.character.hair_color}</span></li>
}

export default Character;