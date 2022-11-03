import '../App.css';
import airbnbLogo from '../airbnb-logo.png'

function Navbar() {
  return (
    <nav className="nav">
     <img src={airbnbLogo} className="airbnbLogo"></img>
    </nav>
  );
}

export default Navbar;