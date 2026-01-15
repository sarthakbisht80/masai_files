
export const loginUser= async(email,password)=>{
    const res= await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password}),
    }        
    );

    const data= await res.json();
    if(!res.ok) throw new Error (data.message || "Login Faild");
    return data;
}
