import React,{useEffect, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import ErrorBanner from "../Components/ErrorBanner";
import { fetchPokemon } from "../features/pokemon/pokemonSlice";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import {Link} from 'react-router-dom';


const Dashboard=()=>{
    const dispatch= useDispatch();
    const {list,loading ,error, offset} = useSelector(state=>state.pokemon);

    useEffect(()=>{
        dispatch(fetchPokemon(offset));
    },[dispatch]);

if(loading) return <Loader/>
if(error) return <ErrorBanner message={error}/>

return(
    <div>

    <h1>Pokemon Dashboard🪹</h1>

    <div style={{display:"flex",
        flexWrap:"wrap"
    }}> 
        { list.map(p=>(
        <div key={p.id} 
        style={{border:"1px solid red",
            padding:"10px",
            margin:"10px"
        }}>
            <h3>{p.name}</h3>
            <img src={p.sprites.front_default} alt={p.name} />
            <p>weight: {p.weight}</p>
            <p>types {p.types.map(t=>t.type.name).join(', ')}</p>
            <Link to={`/details/${p.id}`}>View Details</Link>
            </div>            
        ))}
    </div>
<Pagination/>
    </div>
);

};
export default Dashboard;