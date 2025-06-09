import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";

const DetailPage=()=>{

    const {id}= useParams;
    const [pokemon,setpokemon] =useState(null);
    const [loading,setloading]= useState(true);


useEffect(()=>{

    axios.get(`https://pokeapi.co/api/v2/pokemon${id}`)
    .then(res=>{
        setpokemon(res.data);
        setloading(false);
    });
},[id]);
if(loading) return <Loader/>
return(

    <div>
        <img src={pokemon.sprites.front_default}  />
        <h2>{pokemon.name}</h2>
        <h3>{pokemon.height}</h3>

    </div>
)

}
export default DetailPage;