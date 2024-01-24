import logoFooter from "../assets/logo_footer.png";
import { Link } from "react-router-dom";

import facebookImg from "../assets/Facebook_Logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <img src={logoFooter} className="footer-logo" alt="logo" />

        <nav className="footer-link">
          <Link to="about">About</Link>
          <Link to="order">Order Online</Link>
          <Link to="menu">Menu</Link>
          <Link to="booking">Reserve a table</Link>
          <Link to="login">Login</Link>
        </nav>

        <nav className="footer-link">
          <img src={facebookImg} width={30} />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
