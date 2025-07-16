import React, { useEffect, useState } from 'react';
import { fetchSnacks, addSnack } from '../firebaseAPI';
import SnackList from '../components/SnackList';
const Home = () => {
  const [snacks, setSnacks] = useState([]);
  const [form, setForm] = useState({
    id:'',
    title: '',
    category: '',
    price: '',
    rating: '',
    image:'',
  });

  // Load snacks when component mounts

  useEffect(() => {
    async function loadData() {
      const data = await fetchSnacks();
      setSnacks(data);
    }
    loadData();
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });
  };

  // Handle form submit ===>

  async function handleSubmit(e) {
    e.preventDefault();   

    const newSnack = {

      ...form,
      id: parseFloat(form.id),
      price: parseFloat(form.price),
      rating: parseFloat(form.rating)

    };
    const NewUpdatedSnack = await addSnack(newSnack);
    setSnacks((prev)=>[...prev, NewUpdatedSnack]);
     setForm({
        id:'',
    title: '',
    category: '',
    price: '',
    rating: '',
    image:'',
     })
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Snack</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
       <input
          type="text"
          name="id"
          value={form.id}
          placeholder="Enter id...."
          onChange={handleChange}
          required
        />
       
        <input
          type="text"
          name="title"
          value={form.title}
          placeholder="Enter title of snack"
          onChange={handleChange}
          required
        />
       
         <input
          type="text"
          name="image"
          value={form.image}
          placeholder="Enter image url ....."
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          value={form.category}
          placeholder="Enter category"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rating"
          value={form.rating}
          placeholder="Enter rating"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          value={form.price}
          placeholder="Enter price"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Snack 🍩</button>
      </form>

  <SnackList snack={snacks}/>   
    </div>
  );
};

export default Home;
