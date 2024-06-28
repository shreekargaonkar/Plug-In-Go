import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { string } from 'prop-types';

const UpdateChargerById = () => {
  const [id, setId] = useState(0);
  const [charger, setCharger] = useState(null);
  const [errorMessage, setErrorMessage] = useState(''); // Add state for error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error message
    setErrorMessage('');

    try {
      const response = await axios.get(`http://localhost:8080/api/chargers/getcharger/${id}`); // Replace with your exact API endpoint URL
      setCharger(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error fetching charger details!'); // Set error message
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!charger) {
      return; // Prevent update if charger is not fetched yet
    }

    const updatedCharger = {
      ...charger, // Spread existing charger data
      longitude: Number(e.target.longitude.value), // Ensure numeric conversion
      latitude: Number(e.target.latitude.value),
      rate: Number(e.target.rate.value),
      compatibility: String(e.target.compatibility.value)
    };

    try {
      await axios.put(`http://localhost:8080/api/chargers/update/${charger.id}`, updatedCharger); // Replace with your exact API endpoint URL
      setCharger(updatedCharger); // Update local state with updated data
      alert('Charger updated successfully!');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error updating charger!'); // Set error message
    }
  };

  return (
    <div style={{ color: 'white' }}> {/* Apply inline style to entire component for white text */}
      <h1>Update Charger by ID</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button className="home-hero-button1 buttonFilled">Fetch Details</button>
      </form>
      {charger ? (
        <div>
          <h2>Charger Details</h2>
          <p>ID: {charger.id}</p>
          <form onSubmit={handleUpdateSubmit}>
            <label style={{ color: 'inherit' }}> {/* Inherit white color from parent */}
              Longitude:
              <input type="text" name="longitude" defaultValue={charger.longitude} /><br></br>
            </label>
            <label style={{ color: 'inherit' }}>
              Latitude:
              <input type="text" name="latitude" defaultValue={charger.latitude} /><br></br>
            </label>
            <label style={{ color: 'inherit' }}>
              Rate:
              <input type="text" name="rate" defaultValue={charger.rate} /><br></br>
            </label>
            <label style={{ color: 'inherit' }}>
              Compatibility:
              <input type="text" name="compatibility" defaultValue={charger.compatibility} /><br></br>
            </label>
            <button className="home-hero-button1 buttonFilled">Update</button>
          </form>
          <p style={{ color: 'white' }}>{errorMessage}</p> {/* Display error message */}
        </div>
      ) : (
        <p style={{ color: 'white' }}>{errorMessage ? errorMessage : 'Enter a charger ID to fetch details.'}</p>
      )}
    </div>
  );
};

export default UpdateChargerById;
