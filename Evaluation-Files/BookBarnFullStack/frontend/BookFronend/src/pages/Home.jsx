import { useContext, useState } from "react";



export default function Home(){
    const {user}= useContext(AuthContext);
    const idAdmin= user?.role ==="admin";
    const navigate= useNavigate();
    const [books, setBooks] = useState([]);
    const [page, setPage]=useState(1);
    const [limit]= useState(6);
    const [totalPages,setToalPages]= useState(1);
    const [filters,setFilters]= useState({genre:"",author:""});
    const [loading,setLoading]= useState(false);



    const fetchBooks= async (p=page)=>{
        setLoading(true);
        
    }   

}