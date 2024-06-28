import React, { useState } from 'react';
import axios from 'axios';

const AddCharger = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [rate, setRate] = useState('');
  const [compatibility, setCompatibility] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCharger = {
      longitude,
      latitude,
      rate,
      compatibility
    };

    try {
      await axios.post('http://localhost:8080/api/chargers/add', newCharger); // Replace with your API endpoint URL
      alert('Charger added successfully!');
      setLongitude('');
      setLatitude('');
      setRate('');
      setCompatibility('');
    } catch (error) {
      console.error(error);
      alert('Error adding charger!');
    }
  };

  return (
    <div>
      <h1>Add Charger</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ color: 'white' }}> {/* Apply inline style to each label */}
          Longitude:
          <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} /><br></br>
        </label>
        <label style={{ color: 'white' }}>
          Latitude:
          <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} /><br></br>
        </label>
        <label style={{ color: 'white' }}>
          Rate:
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} /><br></br>
        </label>
        <label style={{ color: 'white' }}>
          Compatibility:
          <input type="text" value={compatibility} onChange={(e) => setCompatibility(e.target.value)} /><br></br>
        </label>
        <button className="home-hero-button1 buttonFilled">create</button>
      </form>
    </div>
  );
};

export default AddCharger;
