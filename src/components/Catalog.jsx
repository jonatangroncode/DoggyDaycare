import React, { useState, useEffect } from 'react';

function DogsCatalog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const dogsData = [];
        breeds.forEach(breed => {
          fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(data => {
              dogsData.push({ name: breed, img: data.message });
              if (dogsData.length === breeds.length) {
                setDogs(dogsData);
              }
            });
        });
      });
  }, []);

  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.name}>
          <img src={dog.img} alt={dog.name} />
          <p>{dog.name}</p>
        </div>
      ))}
    </div>
  );
}

export default DogsCatalog;