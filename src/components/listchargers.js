import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ['places']; // Required for address lookup

const ListChargers = () => {
  const [chargers, setChargers] = useState([]);
  const [selectedCharger, setSelectedCharger] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '//insert your api key', 
    libraries,
  });

  const mapContainerStyle = {
    width: '100vw',
    height: '400px', 
  };

  const center = {
    lat: 15.854147919657759, 
    lng: 74.50809245137964, 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/chargers/getallchargers');
        setChargers(response.data);
      } catch (error) {
        console.error('Error fetching chargers data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChargerClick = (charger) => {
    setSelectedCharger(charger);
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
      {chargers.map((charger) => (
        <Marker
          key={charger.id}
          position={{ lat: charger.latitude, lng: charger.longitude }}
        />
      ))}
      {selectedCharger && (
        <InfoWindow
          position={{ lat: selectedCharger.latitude, lng: selectedCharger.longitude }}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <h4>{selectedCharger.name}</h4> {/* Assuming a 'name' property exists */}
            <p>
              {/* Use Google Places API to fetch address information dynamically */}
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
      )
      }
    </GoogleMap>
  );

  if (loadError) return 'Error loading Google Maps';
  if (!isLoaded) return 'Loading Google Maps';

  return (
    <div>
      <h1>List of All Chargers</h1>
      <table>
        <thead className="table-header">
          <tr>
            <th>id</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Rate/min</th>
            <th>Compatibility</th>
            <th>Show on Map</th>
          </tr>
        </thead>
        <tbody>
          {chargers.map((charger) => (
            <tr key={charger.id} className="table-row">
              <td>{charger.id}</td>
              <td>{charger.longitude}</td>
              <td>{charger.latitude}</td>
              <td>{charger.rate}</td>
              <td>{charger.compatibility}</td>
              <td>
                <button onClick={() => handleChargerClick(charger)}>
                  Show on Map
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoaded && renderMap()}
    </div>
  );
};

export default ListChargers;
