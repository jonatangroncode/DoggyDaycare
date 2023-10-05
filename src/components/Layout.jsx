import React from 'react';
import { Link } from 'react-router-dom'; 

import './layout.css';

function Layout({ children }) {
  return (
    <div>
      <div className='navbar'>
      
          <h1 className='first-object'><Link to="/">
            Doggy<span className='doggyday'>daycare</span>  </Link>
            </h1>
        
        <ul className='cont'>
           
          <li className='second-object'>
            <Link to="/">Home</Link>
          </li>
          <li className='third-object'>
            <Link to="/catalog">Catalog</Link>
          </li>
       
        </ul>
      </div>
    
     
    </div>
  );
}

export default Layout;
