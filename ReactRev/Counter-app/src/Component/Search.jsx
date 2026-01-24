
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



// api-https://fakestoreapi.com/products
const Search = () => {
    
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [search,setSearch]= useState("");
    const [filteredData,setFilteredData]= useState([]);
    const [debaounceVal, setDebouncedval]=useState(""); 

    //
    
    //Fetch Data :-
    useEffect(()=>{
        async function getData() {
                try {
                    const res= await fetch("https://fakestoreapi.com/products");
                    const data= await res.json();
                    setData(data);
                     setFilteredData(data);
                     setIsLoading(false); 
                } catch (error) {
                    console.log("error ",error);
                    setIsLoading(false);
                }
        }
        getData();
    },[]);

  //Debaounce funtion   
  useEffect(()=>{
    let timer;
    timer = setTimeout(() => {
        setDebouncedval(search);
    }, 1000);
    //Cleanup Funciton
    return()=>clearTimeout(timer);
  },[search]);

  //For Filtred data as search val
  useEffect(()=>{

        if(!debaounceVal){
            setFilteredData(data);
        }
        else{
            const filtered= data.filter(el=>
                el.title.toLowerCase().includes(debaounceVal.toLowerCase())
            )
            setFilteredData(filtered);
        }
  },[debaounceVal,data]);
    return (
        <> 
           <input type="text" style={{padding:"9px", margin:"10px" ,width:"100%"}} placeholder='Enterr Searched text....'
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
            />
        <h2>{search}</h2>
            {isLoading ? (
                <h2>Loading.....</h2>
            ):(
                   <div>
                    {filteredData.length >0 ?(
                        filteredData.map((el)=>(
                            <div key={el.id}>
                                <h2>{el.title}</h2>
                                <p>price :{el.price}</p>
                                <img src={el.image} alt="" />
                                </div>
                        ))
                    ):(
                        <h2>No data found</h2>
                    )}
                   </div>
            )}
            </>
  )
}

export default Search;