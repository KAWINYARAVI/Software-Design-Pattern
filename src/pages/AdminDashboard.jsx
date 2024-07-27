// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/admin/data')
      .then(response => response.json())
      .then(data => setData(data.customers))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {data.map(customer => (
        <div key={customer.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <h2>Customer: {customer.name}</h2>
          <p>Email: {customer.email}</p>
          <p>ID: {customer.id}</p>
          <p>Password: {customer.password}</p>

          <h3>Cart</h3>
          <ul>
            {customer.cart.map(item => (
              <li key={item.productId}>
                {item.productName} (Quantity: {item.quantity})
              </li>
            ))}
          </ul>

          <h3>Billing Details</h3>
          <p>Total Amount: ${customer.billingDetails.totalAmount}</p>
          <p>Billing Date: {customer.billingDetails.billingDate}</p>

          <h3>Recommendations</h3>
          <ul>
            {customer.recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
