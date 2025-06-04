const initialState={
    isAuthenticated:false,

}
function authReducer(state,action){
    switch(action.type){

        case 'Login':
            return {isAuthenticated:true};

        case 'Logout':
            return {isAuthenticated:false};
        default:
            return initialState;    
        }

}
export default authReducer;