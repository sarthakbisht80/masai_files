import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    alert("Profile Updated!");
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Update</button>
      </form>
    </div>
  );
};

export default Settings;
