import React,{useEffect} from "react";

import { useSelector,useDispatch } from "react-redux";

import { fetchData } from "../redux/action";

const Datafetcher=()=>{

    const {loading,data, error } = useSelector((state)=>state);
    const dispatch= useDispatch();
    
    useEffect(()=>{
     dispatch(fetchData());
    },[dispatch]);
    return(
        <>
        
        <h2>Aync fucntion with  redux Thunk</h2>
{loading && <p>Loading....</p>}
{error && <p>{error}</p>}

{data && (<div>
    <h3>Fetched Data</h3>
<p>{data.id}</p>
<p>{data.title}</p>

</div>
)}

        </>
    );

};
export default Datafetcher;