import React from 'react';
import { useParams } from 'react-router-dom';



function DogDetailsPage() {
  const { id } = useParams(); // hämta id från URL:en

  // sök efter hunden med hjälp av id
  const dog = dogs.find((dog) => dog.id === parseInt(id));

  // om hunden inte hittas, returnera en meddelande
  if (!dog) {
    return <div>Hunden hittades inte.</div>;
  }

  // om hunden hittas, returnera hundens information
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p>{dog.description}</p>
      <p>Ålder: {dog.age} år</p>
      <p>Ras: {dog.breed}</p>
    </div>
  );
}

export default DogDetailsPage;
