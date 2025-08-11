// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const styles = {
//     navbar: {
//       background: '#0d6efd',
//       color: 'white',
//       padding: '0.8rem 1.5rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     },
//     navLinks: {
//       listStyle: 'none',
//       display: 'flex',
//       margin: 0,
//       padding: 0
//     },
//     navItem: {
//       marginLeft: '15px'
//     },
//     link: {
//       color: 'white',
//       textDecoration: 'none'
//     }
//   };

//   return (
//     <nav style={styles.navbar}>
//       <div>
//         <Link style={styles.link} to="/">📦 RapidReach</Link>
//       </div>
//       <ul style={styles.navLinks}>
//         <li style={styles.navItem}><Link style={styles.link} to="/">Home</Link></li>
//         {!token && <li style={styles.navItem}><Link style={styles.link} to="/register">Register</Link></li>}
//         {!token && <li style={styles.navItem}><Link style={styles.link} to="/login">Login</Link></li>}
//         {token && <li style={styles.navItem}><Link style={styles.link} to="/dashboard">Dashboard</Link></li>}
//         {token && <li style={{...styles.navItem, cursor: 'pointer'}} onClick={handleLogout}>Logout</li>}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for dropdown functionality

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#00cfff' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">
          RapidReach
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            {/* Dropdown for Shipping */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shipping
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/createashipment">Create a Shipment</Link></li>
                <li><Link className="dropdown-item" to="/calculatecost">Calculate Shipping Cost</Link></li>
                <li><Link className="dropdown-item" to="/howtoship">How to Ship a Parcel</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/tracking">Tracking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/support">Support</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/login">Login</Link>
                </li>
              </>
            )}
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/dashboard">
                    <i className="bi bi-person-circle fs-5"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-dark" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
