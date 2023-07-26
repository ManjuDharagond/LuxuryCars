import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {


  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };


  return (
//   <nav className="navbar navbar-expand-md  mb-3 " style={{width: "83vw", flexShrink:'0'}}>
//   <div className='container-fluid w-100 '>
//       <div className=' container-1 order-first'>
//         <Link to="/" className="navbar-brand navbar_brand mb-3">LuxuryCars</Link>
//       </div>
//       <button className="navbar-toggler navbar-light " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className='container-3 order-first order-md-last'>
//       <ul className='navbar-nav mr-0'>
//         <li className="nav-item account_circle">
//           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
//             <g clip-path="url(#clip0_1_372)">
//               <path d="M20 3.3335C10.8 3.3335 3.33337 10.8002 3.33337 20.0002C3.33337 29.2002 10.8 36.6668 20 36.6668C29.2 36.6668 36.6667 29.2002 36.6667 20.0002C36.6667 10.8002 29.2 3.3335 20 3.3335ZM20 8.3335C22.7667 8.3335 25 10.5668 25 13.3335C25 16.1002 22.7667 18.3335 20 18.3335C17.2334 18.3335 15 16.1002 15 13.3335C15 10.5668 17.2334 8.3335 20 8.3335ZM20 32.0002C15.8334 32.0002 12.15 29.8668 10 26.6335C10.05 23.3168 16.6667 21.5002 20 21.5002C23.3167 21.5002 29.95 23.3168 30 26.6335C27.85 29.8668 24.1667 32.0002 20 32.0002Z" fill="#F1BC00"/>
//             </g>
//             <defs>
//               <clipPath id="clip0_1_372">
//                 <rect width="40" height="40" fill="white"/>
//               </clipPath>
//             </defs>
//           </svg>
//           <Link to="/" style={{display:'inline-block'}}  className="nav-link sign_in">Sign In</Link>
//         </li>
//       </ul>
//     </div>  

//     <div className="collapse container-2 text-center navbar-collapse mt-2" id="navbarNav">
//       <ul className="navbar-nav ul ml-auto">
//         <li className="nav-item home">
//           <Link to="/" className="nav-link">Home</Link>
//         </li>
//         <li className="nav-item services">
//           <Link to="/" className="nav-link">Services</Link>
//         </li>
//         <li className="nav-item blog">
//           <Link to="/" className="nav-link">Blog</Link>
//         </li>
//         <li className="nav-item contact_us">
//           <Link to="/about" className="nav-link">Contact Us</Link>
//         </li>
//       </ul>
//     </div>

    
//   </div>
// </nav>





<nav className="navbar navbar-expand-md mb-3" style={{ width: "83vw", flexShrink: '0' }}>
<div className='container-fluid w-100'>
  <div className='container-1 order-first'>
    <Link to="/" className="navbar-brand navbar_brand mb-3">LuxuryCars</Link>
  </div>
  {/* <button className="navbar-toggler navbar-light " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
      <path stroke="black" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path>
    </svg>
  </span>
</button>


  <div className='container-3 order-first order-md-last'>
    <ul className='navbar-nav mr-0'>
      <li className="nav-item account_circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clip-path="url(#clip0_1_372)">
            <path d="M20 3.3335C10.8 3.3335 3.33337 10.8002 3.33337 20.0002C3.33337 29.2002 10.8 36.6668 20 36.6668C29.2 36.6668 36.6667 29.2002 36.6667 20.0002C36.6667 10.8002 29.2 3.3335 20 3.3335ZM20 8.3335C22.7667 8.3335 25 10.5668 25 13.3335C25 16.1002 22.7667 18.3335 20 18.3335C17.2334 18.3335 15 16.1002 15 13.3335C15 10.5668 17.2334 8.3335 20 8.3335ZM20 32.0002C15.8334 32.0002 12.15 29.8668 10 26.6335C10.05 23.3168 16.6667 21.5002 20 21.5002C23.3167 21.5002 29.95 23.3168 30 26.6335C27.85 29.8668 24.1667 32.0002 20 32.0002Z" fill="#F1BC00" />
          </g>
          <defs>
            <clipPath id="clip0_1_372">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Link to="/" style={{ display: 'inline-block' }} className="nav-link sign_in">Sign In</Link>
      </li>
    </ul>
  </div>

  <div className="collapse container-2 text-center navbar-collapse mt-2" id="navbarNav">
    <ul className="navbar-nav ul ml-auto">
      <li className={`nav-item home ${activeItem === 'home' ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => handleItemClick('home')}>
          Home
        </Link>
      </li>
      <li className={`nav-item services ${activeItem === 'services' ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => handleItemClick('services')}>
          Services
        </Link>
      </li>
      <li className={`nav-item blog ${activeItem === 'blog' ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => handleItemClick('blog')}>
          Blog
        </Link>
      </li>
      <li className={`nav-item contact_us ${activeItem === 'contact_us' ? 'active' : ''}`}>
        <Link to="/about" className="nav-link" onClick={() => handleItemClick('contact_us')}>
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
</div>
</nav>

  )
}
