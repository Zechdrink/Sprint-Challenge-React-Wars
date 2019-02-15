import React from 'react';

const Character = props => {
    return <p className = "character-class"><li>{props.character.name}</li></p>
}

export default Character;