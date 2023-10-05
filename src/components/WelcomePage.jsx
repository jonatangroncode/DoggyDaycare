import React from "react";
import './welcomepage.css';
import { Link } from "react-router-dom";


export function WelcomePage() {
  return (
    <div className="containerframe">
       <Link to="/catalog">
    <div className="container" >
      <h1 className="h11">Welcome to Doggy Daycare</h1>
      <p>We take care of your dog in the best possible way. We offer a safe and fun environment where your dog can play and meet new friends.</p>
      <p>Click on "Catalog" in the navigation menu to see a list of all the dogs that have visited us before.</p>
     
    </div>
    </Link>
    </div>
  );
}

        
    



