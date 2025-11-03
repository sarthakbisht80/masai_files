import { AuthContext } from "../Context/AuthContext";
import {Link,useNavigate,usenavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
export default function Navbar(){
    const  {user,logout}= useContext(AuthContext);
    const navigate= useNavigate();

    return(
        <nav className="nav">
             <div className="nav-left">
                <Link to="/">BookBarn</Link>
                <Link to="/about">About</Link>

                </div>
                <div className="nav-right">
                    {user ? (
                        <>
                            <span className="role">({user.role})
                                <button onClick={()=>{
                                    logout();
                                    navigate("/login");
                                }}></button>    
                                </span>
                        </>
                    ):(
                        <Link to="/login">
                            Login
                        </Link>
                    )}
                    </div>   
            </nav>
    )
}
