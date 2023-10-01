import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import { WelcomePage } from './Welcomepage';
import DogsCatalog from './Catalog';
import './navigationmenu.css'
import DogDetailsPage from './DogDetailsPage';

function Home() {
  return <h1>Välkommen till startsidan!</h1>;
}

function Catalog() {
  return <h1>Här är vår katalog</h1>;
  

}

function NavigationMenu() {
  const [currentPage, setCurrentPage] = useState('home');

  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div></div>
  
  );
}

export default NavigationMenu;

