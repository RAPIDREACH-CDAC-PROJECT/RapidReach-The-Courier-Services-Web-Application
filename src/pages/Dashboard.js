import React, { useState, useEffect } from 'react';
import { getShipments, createShipment } from '../api';

function Dashboard() {
  const token = localStorage.getItem('token');
  const [shipments, setShipments] = useState([]);
  const [description, setDescription] = useState('');

  const loadShipments = async () => {
    try {
      const res = await getShipments(token);
      setShipments(res.data);
    } catch {
      alert('Failed to load shipments');
    }
  };

  const handleCreate = async () => {
    try {
      await createShipment(token, { description });
      setDescription('');
      loadShipments();
    } catch {
      alert('Failed to create shipment');
    }
  };

  useEffect(() => {
    loadShipments();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        placeholder="Shipment Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreate}>Create Shipment</button>

      <h3>Your Shipments</h3>
      <ul>
        {shipments.map((s) => (
          <li key={s.shipmentId}>
            {s.description} — {new Date(s.shippedDate).toLocaleString()} — {s.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
