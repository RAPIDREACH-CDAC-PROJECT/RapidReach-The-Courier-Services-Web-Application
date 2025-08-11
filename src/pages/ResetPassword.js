import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyResetToken, resetPassword } from "../api";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [tokenValid, setTokenValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkToken() {
      setLoading(true);
      try {
        await verifyResetToken(token);
        setTokenValid(true);
      } catch (err) {
        setMessage(
          err.response?.data?.error || "❌ Invalid or expired reset link."
        );
        setTokenValid(false);
      }
      setLoading(false);
    }
    if (token) checkToken();
    else {
      setMessage("❌ No reset token found.");
      setLoading(false);
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      await resetPassword(token, newPassword);
      setMessage("✅ Password updated! Redirecting...");
      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      setMessage(
        err.response?.data?.error || "❌ Error updating password. Try again."
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
    },
    msg: { marginBottom: "1rem", textAlign: "center" }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reset Password</h2>
      {loading && <div style={styles.msg}>Verifying link...</div>}
      {!loading && message && (
        <div
          style={{
            color: message.startsWith("✅") ? "green" : "red",
            ...styles.msg
          }}
        >
          {message}
        </div>
      )}
      {!loading && tokenValid && (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            style={styles.input}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>
            Change Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
