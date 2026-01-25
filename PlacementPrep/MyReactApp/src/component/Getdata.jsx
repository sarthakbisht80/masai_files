import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Getdata = () => {
  
    const [posts ,setPosts]= useState([]);
    const [users,setUsers]=useState({});
    const [comments,setComments]= useState({});
    const [openPostId,setOpenPostId]= useState(null);
    const [loading,setLoading]=  useState(false);
    const[ loadingcomments,setLoadingComments]= useState(false);
    const [error,setError]= useState(null);
    // const [page,setPage]=useState(1);
    // const PostPerPage=5;
    useEffect(()=>{
        const fetchPost= async()=>{
            try {
              
                setError(null);
                const res= await fetch("https://jsonplaceholder.typicode.com/posts")
                if(!res.ok) throw new Error("failed to fectch");
                const data= await res.json();
                setPosts(data);
                data.forEach(async (post)=>{
                    if(!users[post.userId]){
                        const userRes= await fetch(`https://jsonplaceholder.typicode.com/users/{userId}/${post.userId}`);
                        const userData= await userRes.json();
                        setUsers((prev)=>({...prev,[post.userId]: userData.username}));
                    }
                    
                });
                // console.log(data);
            } catch (error) {
                    setError(error.message);

            }
        }
        fetchPost();
    },[users]);


    //toggle + fetch
    const toggleCommnets= async(postId)=>{
        if(openPostId=== postId){
            setOpenPostId(null);
            return;

        }
        if(!comments[postId]){
            try {
                setLoadingComments(true);
                const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                if(!res.ok) throw new Error("failed to fercb all the omments");
                const data= await res.json();
                setComments((prev=>({...prev ,[postId] : data})));
            } catch (error) {
                console.log(error);
                setError(error.message);
            }   finally{
                setLoadingComments(false);
            }
        }
        setOpenPostId(postId);

    }
   
    return (
    <>
                <h1 style={{color:"rebeccapurple"}}>Feed Post</h1>
            {loading ? (
                <p>Loading...</p>
            ):(
             <div>
                {posts.map((post)=>(
                    <div key={post.id} style={{
                border:"solid red 2px"
             }}>
                           <h2>{post.title}</h2> 
                           <p>{post.body}</p>
                    <div className='fotter '>
                    <span> @{users[post.userId]}</span>
                    <button onClick={()=>toggleCommnets(post.id)}>  
                         { openPostId ===post.id ?"hide comments":"show comments"}
                        </button>
                        </div>

                        </div>
                ))}
             </div>
            )
             }
             
        
    </>
  )
}

export default Getdata