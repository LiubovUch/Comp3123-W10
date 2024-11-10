import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: '20px', border: '5px solid green', width: '600px', margin: 'auto', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Data Entry Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <label htmlFor="address1">Address</label>
        <input
          type="text"
          name="address1"
          id="address1"
          placeholder="Address"
          value={formData.address1}
          onChange={handleChange}
        />

        <label htmlFor="address2">Address 2</label>
        <input
          type="text"
          name="address2"
          id="address2"
          placeholder="Apartment, studio, or floor"
          value={formData.address2}
          onChange={handleChange}
        />

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          Agree to Terms & Conditions?
        </label>

        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', border: '5px solid green', padding: '10px', borderRadius: '8px' }}>
          <h3>Submitted Data:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Name: {submittedData.name}</p>
          <p>Address: {submittedData.address1}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
          <p>Agreed to Terms: {submittedData.agree ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
