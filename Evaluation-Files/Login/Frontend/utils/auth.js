export const getToken=()=>{
    return localStorage.getItem("token");

}
export const setToken=()=>{
    return localStorage.setItem("token",token);
}

export const removeToken=()=>{
    localStorage.removeItem("token");
    
}
export const isAuthenticated=()=>{
    return !!localStorage.getItem("token");
    
}