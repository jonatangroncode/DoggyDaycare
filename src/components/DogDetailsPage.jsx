import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './dogdetailspage.css';

function DogDetailsPage(props) {

  const [dogInfo, setDogInfo] = useState(null);

  const { chipNumber } = useParams();
  const location = useLocation();
  const dogData = location.state.dog; // Access the passed dog data


  const navigate = useNavigate();

  useEffect(() => {
   

    const selectedDog = props.dogsData.find((dog) => dog.chipNumber === chipNumber);

    console.log('Selected Dog:', selectedDog);
    if (selectedDog) {
      setDogInfo(selectedDog); 
    }
  }, [chipNumber, props.dogsData]);

  return (
  <div className='half'>
    <div className='designbg'>

   
    <div className="container">
      {dogInfo ? (
        <>
          <h2>{dogInfo.name}</h2>
          <img src={dogInfo.img} alt={dogInfo.name} />
          <p>Sex: {dogInfo.sex}</p>
          <p>Breed: {dogInfo.breed}</p>
          <p>Age: {dogInfo.age}</p>
          <p>Chip Number: {dogInfo.chipNumber}</p>
          <div className="owner-info">
            <p>Owner Name: {dogInfo.owner.name}</p>
            <p>Owner Last Name: {dogInfo.owner.lastName}</p>
            <p>Owner Phone Number: {dogInfo.owner.phoneNumber}</p>
          </div>
          <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>        </>
      ) : (
        <div>No dog information available.</div>
      )}
    </div> 
    

    </div>
    </div>
    
  );
}

export default DogDetailsPage;
