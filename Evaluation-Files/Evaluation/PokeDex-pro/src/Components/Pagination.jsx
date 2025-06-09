import {useSelector, useDispatch} from 'react-redux';
import { fetchPokemon } from '../features/pokemon/pokemonSlice';
 

const Pagination = ()=>{
    const dispatch= useDispatch();
    const {next,previous,offset}= useSelector(state=>state.pokemon);
    return(
<div>

    <button onClick={()=>dispatch(fetchPokemon(offset-20))} disabled={!previous}>Previous</button>

     <button onClick={()=>dispatch(fetchPokemon(offset+20))} disabled={!next} > Next</button>   

</div>

    );

};
export default Pagination;