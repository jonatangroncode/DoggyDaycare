import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import DogsCatalog from "./components/Catalog";
import DogDetailsPage from "./components/DogDetailsPage";
import "./App.css";
import { WelcomePage } from "./components/Welcomepage";
import Layout from "./components/Layout";


function App() {
  const [dogsData, setDogsData] = useState([]);

  useEffect(() => {
    // Gör en fetch för att hämta hunddata
    fetch("https://api.jsonbin.io/v3/b/65060e258d92e126ae6dab86")
      .then((response) => response.json())
      .then((data) => {
        const dogsData = data.record.map((dog) => ({
          name: dog.name,
          img: dog.img,
          sex: dog.sex,
          breed: dog.breed,
          age: dog.age,
          chipNumber: dog.chipNumber,
          owner: {
            name: dog.owner.name,
            lastName: dog.owner.lastName,
            phoneNumber: dog.owner.phoneNumber,
          },
        }));
        setDogsData(dogsData);
      })
      .catch((error) => {
        console.error("Error fetching dog data:", error);
      });
  }, []); 

  return (
    <div className="App">
      <Layout/>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<DogsCatalog />} />
        <Route
          path="/Detaljer/:chipNumber" //url med chipnummer för att göra den unik 
          Component={(props) => <DogDetailsPage {...props} dogsData={dogsData} />} //skickar med hunddata
        />
      </Routes>
    </div>
  );
}

export default App;
