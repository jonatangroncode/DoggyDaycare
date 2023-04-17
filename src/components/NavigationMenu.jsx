import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Start sida</NavLink>
        </li>
        <li>
          <NavLink to="/katalog">Katalog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;