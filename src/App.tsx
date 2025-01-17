import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import FormWorkFlow from "./FormWorkFlow";
import { Dashboard } from "../ui-components";
import logo from "./assets/logo.webp";
import { Home, FilePlus, User } from "lucide-react"; // Icons for TopBar

// Fake user data
const fakeUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Student",
  joinedDate: "January 15, 2025",
};

// TopBar Component with Icons
function TopBar({ onShowProfile }: { onShowProfile: () => void }) {
  console.log(React.version);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e5e7eb", // Light gray
        color: "#000000", // Black text
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section: Logo and Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", width: "50px", objectFit: "contain" }}
          />
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Financial Aid <br /> Application System
          </div>
        </div>

        {/* Right Section: Links with Icons */}
        <div style={{ display: "flex", gap: "20px", fontSize: "1rem", alignItems: "center" }}>
          <Link
            to="/Dashboard"
            style={{ textDecoration: "none", color: "#000000", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Home size={20} /> Dashboard
          </Link>
          <Link
            to="/FSA"
            style={{ textDecoration: "none", color: "#000000", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FilePlus size={20} /> Applications
          </Link>
          <span
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
            onClick={onShowProfile}
          >
            <User size={20} /> Profile
          </span>
        </div>
      </div>
    </div>
  );
}

// BottomBar Component (unchanged)
function BottomBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f3f4f6", // Light gray
        color: "#000000", // Black text
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 0",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <a
          href="/contact-us"
          style={{ textDecoration: "none", color: "#000", fontSize: "0.9rem" }}
        >
          Contact Us
        </a>
        <a
          href="/terms"
          style={{ textDecoration: "none", color: "#000", fontSize: "0.9rem" }}
        >
          Terms & Conditions
        </a>
        <a
          href="/help"
          style={{ textDecoration: "none", color: "#000", fontSize: "0.9rem" }}
        >
          Help
        </a>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <Router>
      <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* TopBar */}
        <TopBar onShowProfile={() => setShowProfile(true)} />

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {showProfile ? (
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2>User Profile</h2>
              <p>
                <strong>Name:</strong> {fakeUser.name}
              </p>
              <p>
                <strong>Email:</strong> {fakeUser.email}
              </p>
              <p>
                <strong>Role:</strong> {fakeUser.role}
              </p>
              <p>
                <strong>Joined:</strong> {fakeUser.joinedDate}
              </p>
              <button
                onClick={() => setShowProfile(false)}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: "#e5e7eb",
                  color: "#000000",
                }}
              >
                Close Profile
              </button>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Navigate to="/FSA" />} />
              <Route path="/FSA" element={<FormWorkFlow />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/contact-us" element={<div>Contact Us (Placeholder)</div>} />
              <Route path="/terms" element={<div>Terms & Conditions (Placeholder)</div>} />
              <Route path="/help" element={<div>Help (Placeholder)</div>} />
            </Routes>
          )}
        </div>

        {/* BottomBar */}
        <BottomBar />
      </main>
    </Router>
  );
}

export default App;
