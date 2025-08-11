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
//       background: '#4ce016ff',
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


import React from 'react'
import './Footer/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-info' data-bs-theme='light'>
      <div className='container'>
        <footer className='py-5'>
          <div className='row'>
            <h3 className='mb-4'><Link to={'/'} className='hlink p-0 text-black'><span>R</span>apid<span>R</span>each</Link></h3> 
            {/* <h3 className='mb-4'><Link to={'/'} className='hlink p-0 text-black'>RapidReach</Link></h3> */}
           
            <div className='col-6 col-md-2 mb-3'>
              <h5>This Site</h5>
              <ul className='nav flex-column'>
                {/* <li className='nav-item mb-2'><Link to={'/'} className='nav-link p-0 text-muted'>Home</Link></li> */}
                <li className='nav-item mb-2'><Link to={'/tracking'} className='nav-link p-0 text-muted'>Tracking</Link></li>
                <li className='nav-item mb-2'><Link to={'/shipping'} className='nav-link p-0 text-muted'>Shipping</Link></li>
                <li className='nav-item mb-2'><Link to={'/support'} className='nav-link p-0 text-muted'>Support</Link></li>
              </ul>
            </div>

            <div className='col-6 col-md-2 mb-3'>
              <h5>Our Company</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'><Link to={'/aboutus'} className='nav-link p-0 text-muted'>About Us</Link></li>
                <li className='nav-item mb-2'><Link to={'/privacypolicy'} className='nav-link p-0 text-muted'>Privacy Policy</Link></li>
                <li className='nav-item mb-2'><Link to={'/termsandconditions'} className='nav-link p-0 text-muted'>Terms And Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
            <p>© 2025 Company, Inc. All rights reserved.</p>
          </div>
        </footer>

        
      </div>
    </div>
  )
}

export default Footer

