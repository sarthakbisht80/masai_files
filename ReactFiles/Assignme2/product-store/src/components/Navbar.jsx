import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#eee' }}>
    <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Product Store</Link>
  </nav>
);

export default Navbar;