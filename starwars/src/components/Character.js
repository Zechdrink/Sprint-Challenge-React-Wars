import React from 'react';

// import './StarWars.css'

const Character = props => {
    return <li>{props.character.name} - Hair-Status: {props.character.hair_color}</li>
}

export default Character;