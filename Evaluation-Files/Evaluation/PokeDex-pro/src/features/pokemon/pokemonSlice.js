import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const baseUrl= 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon= createAsyncThunk(
    'pokemon/fetchPokemon',
    async(offset=0)=>{
        const {data}= await axios.get(`${baseUrl}?offset=${offset}&limit=20`);
        const details= await Promise.all(
            data.results.map(p=>axios.get(p.url).then(res=>res.data))
        );
        return {results :details, next:data.next,previous:data.previous,
            offset };
    }
);

const pokemonSlice= createSlice({


    name:'pokemon',
    initialState:{
        list:[],
        loading:false,
        error:null,
        offset:0,
        next:null,
        previous:null,
    },
    reducers:{},
    extraReducers: builder=>{
        builder
        .addCase(fetchPokemon.pending,
            state=>{
                state.loading=true;
                state.error=null;
            })
        .addCase(fetchPokemon.fulfilled,
            (state,action)=>{
                state.loading= false;
                state.list=action.payload.results;
                state.next=action.payload.next;
                state.previous= action.payload.previous;
                state.offset= action.payload.offset;
            } )
            .addCase(fetchPokemon.rejected,
                (state,action)=>{
                    state.loading=false;
                    state.error=action.error.message;
                });
    },
});
export default pokemonSlice.reducer;