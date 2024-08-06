import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PropertyManagement.css'; // Assuming you have a CSS file for styling

const PropertyManagement = () => {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    title: '',
    description: '',
    sold: false,
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    axios.get('/api/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({
      ...newProperty,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/properties', newProperty)
      .then(response => {
        fetchProperties();
        setNewProperty({
          title: '',
          description: '',
          sold: false,
        });
      })
      .catch(error => {
        console.error('There was an error creating the property!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/properties/${id}`)
      .then(response => {
        fetchProperties();
      })
      .catch(error => {
        console.error('There was an error deleting the property!', error);
      });
  };

  return (
    <div className="property-management">
      <h2>Property Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newProperty.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newProperty.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Property</button>
      </form>
      <div className="property-list">
        {properties.map(property => (
          <div key={property._id} className="property-item">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Status: {property.sold ? 'Sold' : 'Available'}</p>
            <button onClick={() => handleDelete(property._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
