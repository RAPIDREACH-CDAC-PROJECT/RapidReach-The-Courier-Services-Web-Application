import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

// Change this to match your backend ASP.NET API port
const API_URL = "https://localhost:32769/api";

const Shipping = () => {
  const [form, setForm] = useState({
    senderAddress: "",
    receiverAddress: "",
    parcelWeight: "",
    serviceType: "",
    deliveryBranch: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      // Payload must match backend model property names
      const shipmentData = {
        senderAddress: form.senderAddress,
        receiverAddress: form.receiverAddress,
        parcelWeightKg: parseFloat(form.parcelWeight), // match backend model
        serviceType: form.serviceType,
        deliveryBranch: form.deliveryBranch
      };

      await axios.post(`${API_URL}/Shipments`, shipmentData);

      setMessage("✅ Parcel request submitted successfully!");
      setForm({
        senderAddress: "",
        receiverAddress: "",
        parcelWeight: "",
        serviceType: "",
        deliveryBranch: "",
      });
    } catch (err) {
      console.error("Error creating shipment:", err);
      setError("❌ Failed to submit shipment request. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-primary mb-4">Book a Shipment</h3>
          
          {/* Show messages */}
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Sender Address */}
            <div className="mb-3">
              <label className="form-label">Sender Address</label>
              <input
                type="text"
                name="senderAddress"
                className="form-control"
                value={form.senderAddress}
                onChange={handleChange}
                required
              />
            </div>

            {/* Receiver Address */}
            <div className="mb-3">
              <label className="form-label">Receiver Address</label>
              <input
                type="text"
                name="receiverAddress"
                className="form-control"
                value={form.receiverAddress}
                onChange={handleChange}
                required
              />
            </div>

            {/* Parcel Weight */}
            <div className="mb-3">
              <label className="form-label">Parcel Weight (kg)</label>
              <input
                type="number"
                name="parcelWeight"
                min="0"
                step="0.1"
                className="form-control"
                value={form.parcelWeight}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service Type */}
            <div className="mb-3">
              <label className="form-label">Service Type</label>
              <input
                type="text"
                name="serviceType"
                className="form-control"
                placeholder="e.g., Express, Standard"
                value={form.serviceType}
                onChange={handleChange}
                required
              />
            </div>

            {/* Delivery Branch */}
            <div className="mb-3">
              <label className="form-label">Delivery Branch</label>
              <input
                type="text"
                name="deliveryBranch"
                className="form-control"
                value={form.deliveryBranch}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Shipment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
