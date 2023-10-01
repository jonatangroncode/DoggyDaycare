import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';
import DogDetailsPage from './DogDetailsPage';


function DogsCatalog() {
  const [dogs, setDogs] = useState([]);
  const [dogsData, setDogsData] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/65060e258d92e126ae6dab86')
      .then(response => response.json())
      .then(data => {
        const dogsData = data.record.map(dog => ({
          name: dog.name,
          img: dog.img,
          sex: dog.sex,
          breed: dog.breed,
          age: dog.age,
          chipNumber: dog.chipNumber,
          owner: {
            name: dog.owner.name,
            lastName: dog.owner.lastName,
            phoneNumber: dog.owner.phoneNumber
          }
        }));
        setDogs(dogsData);
        setDogsData(dogsData)

      });
  }, []);
  

  if (dogs.length === 0) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }


  

  return (
    <div className='catalog-container'> 
    <Link to="/">
      <button className="knapp">
        Home
      </button>
      </Link>
      <h1 className='catalog-title'>Här är vår katalog</h1>
     
      {dogs.map(dog => (
        <div className='catalog-dog' key={dog.chipNumber}>

<Link to={`/Detaljer/${dog.chipNumber}`} state={{ dog: dog }} onClick={() => console.log('State data:', { dog: dog })}>
  <img src={dog.img} alt={dog.name} />
</Link>
          <p>{dog.name}</p>
        </div>
      ))}
 </div>
  );
}

export default DogsCatalog;

<Link to="/Catalog">
<button className="knapp">
  hej
</button>
</Link>