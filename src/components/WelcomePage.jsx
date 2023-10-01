import React from "react";
import './welcomepage.css';
import { Link } from "react-router-dom";


export function WelcomePage() {
  return (
    <div className="container" >
      <h1 className="h11">Välkommen till Doggy Daycare</h1>
      <p>Hos oss tar vi hand om din hund på bästa möjliga sätt. Vi erbjuder en trygg och rolig miljö där din hund kan leka och träffa nya vänner.</p>
      <p>Klicka på "Katalog" i navigationsmenyn för att se en lista över alla hundar som har besökt oss tidigare.</p>
      <Link to="/Catalog">
      <button className="knapp">
        Catalog
      </button>
      </Link>
    </div>
  );
}

        
    



