import React from 'react';
import axios from 'axios';
import { useState } from 'react'; // Import useState here

const DeleteChargerById = () => {
  const [id, setId] = useState(0);

  const handleDelete = async (e) => {
    e.preventDefault();

    if (window.confirm(`Are you sure you want to delete charger with ID ${id}?`)) {
      try {
        await axios.delete(`http://localhost:8080/api/chargers/delete/${id}`); // Replace with your API endpoint URL
        alert('Charger deleted successfully!');
        setId(0); // Clear ID input
      } catch (error) {
        console.error(error);
        alert('Error deleting charger!');
      }
    }
  };

  return (
    <div>
      <h1>Delete Charger by ID</h1>
      <form onSubmit={handleDelete}>
        <label>
          ID:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button className="home-hero-button1 buttonFilled">
                delete
              </button>
      </form>
    </div>
  );
};

export default DeleteChargerById;
