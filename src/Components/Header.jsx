import { useState, useEffect} from "react";
import logoMenu from "../assets/icon _hamburger.svg";
import logoHeader from "../assets/logo_header.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  // const closeMenu = ()=> {
  //   if (isActive)
  //   {setIsActive(false)}
  // }

  // useEffect(() => {
  //   document.addEventListener('click', closeMenu);
  //   return () => {
  //     document.removeEventListener('click', closeMenu);
  //   };
  // }, []);

  // const handleClick = (event) => {
  //   event.stopPropagation();
  // };


  return (
    <header>
      <div className="container header">
      <div >
        <img src={logoMenu} className="icon-hamburger " onClick={toggleMenu} />
      </div>
        <a href="/">
          <img src={logoHeader} alt="little lemon" className="icon-logo" />
        </a>
        <nav className="header-nav">
          <Link to="/"> Home</Link>
          <Link to="about"> About</Link>
          <Link to="menu">Menu</Link>
          <Link to="booking">Reserve</Link>
          <Link to="order">Order</Link>
          <Link to="login">Login</Link>
        </nav>


{/* small screen */}
          <div className={isActive? 'menu-side active':'menu-side' }>
            <div className="icon--back" onClick={toggleMenu}>
              &lt; close
            </div>

            <nav className="menu--nav">
              <Link to="/" onClick={toggleMenu}> Home</Link>
              <Link to="about" onClick={toggleMenu}> About</Link>
              <Link to="menu" onClick={toggleMenu}>Menu</Link>
              <Link to="booking" onClick={toggleMenu}>Reserve</Link>
              <Link to="order" onClick={toggleMenu}>Order</Link>
              <Link to="login" onClick={toggleMenu}>Login</Link>
            </nav>
          </div>
        </div>
    </header>
  );
};

export default Header;
