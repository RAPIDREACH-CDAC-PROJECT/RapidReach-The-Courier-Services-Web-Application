import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const fetchTrackingInfo = async (number) => {
    if (number === "123456") {
      return {
        status: "In Transit",
        history: [
          { date: "2025-08-01", location: "Origin Warehouse", details: "Parcel received" },
          { date: "2025-08-03", location: "Distribution Center", details: "Parcel processed" },
          { date: "2025-08-05", location: "On Truck", details: "Out for delivery" },
        ],
      };
    } else {
      throw new Error("Tracking number not found");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setTrackingInfo(null);

    try {
      const data = await fetchTrackingInfo(trackingNumber);
      setTrackingInfo(data);
    } catch (err) {
      setError(err.message || "Failed to fetch tracking data.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-primary mb-4">Track Your Parcel</h3>
          <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">Track</button>
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {trackingInfo && (
            <div className="mt-4">
              <h4>Status: <span className="text-success">{trackingInfo.status}</span></h4>
              <h5 className="mt-3">History:</h5>
              <ul className="list-group">
                {trackingInfo.history.map((event, index) => (
                  <li className="list-group-item" key={index}>
                    <strong>{event.date}</strong> — {event.location} — {event.details}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
