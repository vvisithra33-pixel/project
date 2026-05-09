import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          Fruitables
        </Link>

        <ul className="nav-menu">

          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/shop" className="nav-link">Shop</Link>
          </li>

          <li className="nav-item">
            <Link to="/shop-detail" className="nav-link">Shop Detail</Link>
          </li>

          {/* Dropdown Menu */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ cursor: "pointer" }}
            >
              Pages
            </span>

            <div className="dropdown-menu">
              <Link to="/cart" className="dropdown-item">Cart</Link>
              <Link to="/checkout" className="dropdown-item">Checkout</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
              <Link to="/error" className="dropdown-item">404 Page</Link>
     </div>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>

        </ul>

        <div className="nav">
          <i className="fa fa-lock"></i>
          <i className="fa fa-user"></i>

          <div
            className="card search"
            style={{
              position: "absolute",
              right: "180px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <i className="fa fa-search"></i>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
