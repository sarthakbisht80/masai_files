import axios from "axios";

const baseURL= 'https://snackshelf-567fc-default-rtdb.asia-southeast1.firebasedatabase.app/';


export const seedInitialSnack = async () => {
  const snack = {
    id: 'snk_001',
    title: 'Dark Chocolate Almonds',
    category: 'Sweet',
    price: 5.99,
    rating: 4.7,
    createdAt: 1717020000000,
  };

  try {
    const res = await axios.put(`${baseURL}/snacks/${snack.id}.json`, snack);
    console.log('Seeded snack:', res.data);
  } catch (err) {
    console.error('Error seeding snack:', err);
  }
};


export  async function fetchSnacks() {
    const response= await axios.get(`${baseURL}/snacks.json`);
    const result= await response.data;
  
    return result ? Object.entries(result).map(([id,data])=>({id,...data})):[];
  };

  export async function addSnack(snack) {
    const res= await axios.post(`${baseURL}/snacks.json`,snack);
    return {id: res.data.name,...snack};
    }
  
export const updateSnack = async (id, snack) => {
  await axios.patch(`${baseURL}/snacks/${id}.json`, snack);
};

export const deleteSnack = async (id) => {
  await axios.delete(`${baseURL}/snacks/${id}.json`);
};



