
import { useEffect } from 'react';
import { useState } from 'react';



const Searched = () => {
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(true);
     const [search,setSearch]=useState("");
     const [filtered,setFiltered]= useState([]);
     const [debaounceVal,setDebouncedval]= useState("");    
    useEffect(()=>{
            async function getdata() {
                try {
                    const res= await fetch("https://fakestoreapi.com/products");
                    const dataa= await res.json(); 
                    setData(dataa);
                    // console.log(dataa);
                    setLoading(false);       
                } catch (error) {
                    console.log("error fetching the data",error);
                    setLoading(false)
                }
            }
        getdata();
    },[]);
    //debounce value
    
    useEffect(()=>{
        let timer;
        timer= setInterval(() => {
            setDebouncedval(search);
        }, 1000);
        return()=> clearInterval(timer);
    },[search]);

    useEffect(()=>{
        if(!debaounceVal){
            setFiltered(data);

        }
        else{
            const filtered= data.filter(el=>(
                    el.title.toLowerCase().includes(debaounceVal.toLowerCase()))
                )
                setFiltered(filtered);

        }
    },[debaounceVal,data]);

    return (

 <>

 <input type="text" name="" id="" placeholder='enter search vlue' 
    value={search}
 />
    {loading ? (
        <h2>loading...</h2>
    ):(
        <div>
            {filtered.length>0 ? ( 
                filtered.map(el=>(
                      <div key={el.id}>
                            
                                <h2>{el.title}</h2>
                                <p>price :{el.price}</p>
                                <img src={el.image} alt="" />
                                </div>
                ))
            ):(
                <h2>NO data found</h2>
            )}
        </div>
    )}

 </>   
)
}

export default Searched;