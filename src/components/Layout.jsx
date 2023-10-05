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
            <Link to="/">Hem</Link>
          </li>
          <li className='third-object'>
            <Link to="/catalog">Katalog</Link>
          </li>
       
        </ul>
      </div>
      <header>
        
      </header>
      <main>
        {children}
      </main>
     
    </div>
  );
}

export default Layout;
