import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import FormWorkFlow from "./FormWorkFlow";
import { Dashboard } from '../ui-components';

function App() {
  return (
    <Router>
      <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        {/* Form section */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            {/* Redirect root ("/") to "/FSA" */}
            <Route path="/" element={<Navigate to="/FSA" />} />
            <Route path="/FSA" element={<FormWorkFlow />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        {/* Buttons section */}
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #ccc' }}>
          <Link to="/Dashboard">
            <button style={{ padding: '10px 20px' }}>View Dashboard</button>
          </Link>
          <Link to="/">
            <button style={{ padding: '10px 20px' }}>Create Application</button>
          </Link>
        </div>
        
      </main>
    </Router>
  );
}

export default App;
