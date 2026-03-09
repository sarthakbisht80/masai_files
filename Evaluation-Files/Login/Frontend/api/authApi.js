import axios from "axios";

const API= axios.create({
    baseURL:"http://localhost:4000"
});

export const loginUser= (data)=>API.post("/login",data);

export const getProfile= (token)=>
    API.get("/profile",{
        headers:{
            Authorization:`Bearer${token}`
        }
    });
    export const logoutUser= (token)=>{
        API.post('/logut',{},{
            headers:{
                Authorization:`Bearer${token}`
            }
        })
    };

    