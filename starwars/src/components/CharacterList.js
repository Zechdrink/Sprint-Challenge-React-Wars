import React from 'react';

import Character from './Character';
import './StarWars.css'

const CharacterList = props => {
return <div className = "character-container"> {props.starwarsChars.map((character)=>{
    return (
        <Character
        character = {character}
        />
    )
})} </div>
}

export default CharacterList;