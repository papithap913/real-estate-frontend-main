import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    // Fetch properties data from the backend API
    axios.get('/api/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);
  
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property-item">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Status: {property.sold ? 'Sold' : 'Available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
