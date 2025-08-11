import React, { useState } from "react";
import { requestPasswordReset } from "../api";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      await requestPasswordReset(email);
      setMessage("✅ Check your email for the password reset link.");
      setTimeout(() => navigate("/login"), 4000);
    } catch (err) {
      setMessage(
        err.response?.data?.error || "❌ Error sending reset link. Try again."
      );
    }
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "2rem auto",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    },
    heading: { textAlign: "center", marginBottom: "1rem", color: "#0d6efd" },
    input: {
      width: "100%",
      padding: "8px 12px",
      marginBottom: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "1rem"
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#0d6efd",
      border: "none",
      color: "white",
      fontSize: "1.1rem",
      borderRadius: "4px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Forgot Password</h2>
      {message && (
        <div
          style={{
            color: message.startsWith("✅") ? "green" : "red",
            marginBottom: "1rem"
          }}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email"
          type="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
