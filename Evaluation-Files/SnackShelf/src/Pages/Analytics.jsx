import React, { useEffect, useState } from 'react';
import { fetchSnacks } from '../firebaseAPI';
const Analytics = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchSnacks();
      setSnacks(data);
    };
    load();
  }, []);

  return (
    <div>
      <h2>Analytics Page</h2>
      <p>Total snacks: {snacks.length}</p>
    
    </div>
  );
};

export default Analytics;
