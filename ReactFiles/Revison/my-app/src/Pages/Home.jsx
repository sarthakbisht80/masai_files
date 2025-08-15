import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div>
        <h2>Products</h2>
        <div>{products.map((el)=>(
            <div key={el.id}>
                <h2>{el.title}</h2>
            <img src={el.image}
            alt={el.title}
            style={{
                width:"400px",
                height:"450px",
                
            }}
            ></img>
                <p>{el.price}</p>
                </div>
            
        ))}</div>
    </div>
  );
};

export default Home;
