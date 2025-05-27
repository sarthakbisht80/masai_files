import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
    <Link to="/settings">Settings</Link>
  </nav>
);

export default Navbar;
