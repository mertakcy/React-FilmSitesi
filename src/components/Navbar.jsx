import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-links">
            <div>
                <Link id='wtch' to='/watchlist'>İzlenecekler</Link>
            </div>
            <div>
                <Link to='/watched' >İzlenenler</Link>
                <Link to='/' id='add'>+</Link>
            </div>
        </div>
    </div>
  )
};

export default Navbar;
