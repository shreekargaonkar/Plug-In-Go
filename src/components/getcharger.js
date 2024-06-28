import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ['places']; // Required for address lookup (if desired)

const GetChargerById = () => {
  const [id, setId] = useState(0);
  const [charger, setCharger] = useState(null);
  const [selectedCharger, setSelectedCharger] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '', // Replace with your API key
    libraries,
  });

  const mapContainerStyle = {
    width: '400px', // Adjust width and height as needed
    height: '300px',
  };

  const center = {
    lat: 15.854147919657759,
    lng: 74.50809245137964,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/api/chargers/getcharger/${id}`);
      setCharger(response.data);
    } catch (error) {
      console.error('Error fetching charger details:', error);
      setCharger(null);
      alert('Error fetching charger details!');
    }
  };

  const handleInfoWindowClose = () => {
    setSelectedCharger(null);
  };

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
      {charger && (
        <Marker
          key={charger.id}
          position={{ lat: charger.latitude, lng: charger.longitude }}
          onClick={() => setSelectedCharger(charger)}
        />
      )}
      {selectedCharger && (
        <InfoWindow
          position={{ lat: selectedCharger.latitude, lng: selectedCharger.longitude }}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <h4>{selectedCharger.name}</h4> {/* Assuming a 'name' property exists */}
            {/* Use Google Places API to fetch address information dynamically (optional) */}
            <p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedCharger.latitude},${selectedCharger.longitude}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Directions
              </a>
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );

  if (loadError) return 'Error loading Google Maps';
  if (!isLoaded) return 'Loading Google Maps';

  return (
    <div>
      <h1>Get Charger by ID</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button className="home-hero-button1 buttonFilled">Get Charger</button>
      </form>
      {charger && (
        <div style={{ color: 'white' }} className="charger-details">
          <h2>Charger Details</h2>
          <p>ID: {charger.id}</p>
          <p>Longitude: {charger.longitude}</p>
          <p>Latitude: {charger.latitude}</p>
          <p>Rate: {charger.rate}</p>
          <p>Compatibility:{charger.compatibility}</p>
          {isLoaded && renderMap()}
        </div>
      )}
    </div>
  );
};

export default GetChargerById;
