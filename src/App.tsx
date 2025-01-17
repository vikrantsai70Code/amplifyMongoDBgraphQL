import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import FormWorkFlow from "./FormWorkFlow";
import { Dashboard } from '../ui-components';
import logo from './assets/logo.webp';


// TopBar Component with typed props
interface TopBarProps {
  onShowProfile: () => void; // Explicitly typing onShowProfile as a function returning void
}

interface BottomBarProps {
  onShowProfile: () => void; // Explicitly typing onShowProfile as a function returning void
}

// TopBar Component
function TopBar({ onShowProfile }: TopBarProps) {
  console.log(React.version);
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e5e7eb', /* Light gray */
      color: '#000000',           /* Black text */
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Left Section: Title and Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img 
            src={logo}
            alt="Logo" 
            style={{ height: '50px', width: '50px', objectFit: 'contain' }} 
          />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Financial Aid <br /> Application System
          </div>
        </div>

        {/* Right Section: Menu Items */}
        <div style={{ display: 'flex', gap: '20px', fontSize: '1rem' }}>
          <Link to="/Dashboard" style={{ textDecoration: 'none', color: '#000000' }}>Dashboard</Link>
          <Link to="/FSA" style={{ textDecoration: 'none', color: '#000000' }}>Create Application</Link>
          <span style={{ cursor: 'pointer' }} onClick={onShowProfile}>User Profile</span>
        </div>
      </div>
    </div>
  );
}

// BottomBar Component
function BottomBar({ onShowProfile }: BottomBarProps) {
  console.log(React.version);
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e5e7eb', /* Light gray */
      color: '#000000',           /* Black text */
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Left Section: Title */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        </div>

        {/* Right Section: Menu Items */}
        <div style={{ display: 'flex', gap: '20px', fontSize: '1rem' }}>
          <Link to="/Dashboard" style={{ textDecoration: 'none', color: '#000000' }}>Dashboard</Link>
          <Link to="/FSA" style={{ textDecoration: 'none', color: '#000000' }}>Create Application</Link>
          <span style={{ cursor: 'pointer' }} onClick={onShowProfile}>User Profile</span>
        </div>
      </div>
    </div>
  );
}


// Fake user data
const fakeUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Student',
  joinedDate: 'January 15, 2025',
};

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <Router>
      <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        {/* Top Bar */}
        <TopBar onShowProfile={() => setShowProfile(true)} />

        {/* Form section */}
        <div style={{ flex: 1, padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {showProfile ? (
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <h2>User Profile</h2>
              <p><strong>Name:</strong> {fakeUser.name}</p>
              <p><strong>Email:</strong> {fakeUser.email}</p>
              <p><strong>Role:</strong> {fakeUser.role}</p>
              <p><strong>Joined:</strong> {fakeUser.joinedDate}</p>
              <button onClick={() => setShowProfile(false)} style={{ marginTop: '10px', padding: '10px 20px', borderRadius: '8px', backgroundColor: '#e5e7eb', color: '#000000' }}>
                Close Profile
              </button>
            </div>
          ) : (
            <Routes>
              {/* Redirect root ("/") to "/FSA" */}
              <Route path="/" element={<Navigate to="/FSA" />} />
              <Route path="/FSA" element={<FormWorkFlow />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          )}
        </div>

        {/* Buttons section */}
        <BottomBar onShowProfile={() => setShowProfile(true)} />

        
      </main>
    </Router>
  );
}

export default App;
