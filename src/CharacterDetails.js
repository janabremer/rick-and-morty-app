import React from 'react'
import {useState, useEffect} from "react";
import styled from 'styled-components/macro'
import { useParams, Link} from "react-router-dom";
import getCharacterDetails from './services/getCharacterDetails';
    

export default function CharacterDetails (){
    
    const [characterDetails, setCharacterDetails] = useState([])
    let { characterId } = useParams();

    useEffect(() => {
        getCharacterDetails(characterId)
        .then(data => setCharacterDetails(data))
      }, [characterId])
      
    return <Wrapper>
            <h2>{characterDetails.name}</h2>
            <CharImage src={characterDetails.image} />
            <span>Species: {characterDetails.species}</span>
            <span>Gender: {characterDetails.gender}</span> 
            <Link to="/"><button>Back</button></Link>   
        </Wrapper>
               
}


const Wrapper = styled.div`
    background-color: #678492;
    display: ${(props) => (props.hidden ? 'none' : 'grid')};
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px 35px 10px 15px;
    border-bottom: 1px solid #233644;
    place-items: center;
    margin: 20px 60px 20px 60px;
    font-size: 16px;
    opacity: 0.95;
    border-radius: 5px;
    color: #09182b;
    text-align: center;
    text-transform: uppercase;
    box-shadow:  20px 20px 60px #576f7c, 
                 -20px -20px 60px #7596a8;

    h2{
        font-size: 20px;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: #D9D3B4;
        padding: 5px 20px;
        font-size: inherit;
    }
    
`
const CharImage = styled.img`
    width: 90px;
    height: 90px;
    border: 1px solid #233644;
    border-radius: 5px;
`

