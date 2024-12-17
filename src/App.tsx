import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormWorkFlow from "./FormWorkFlow";
import { Dashboard } from '../ui-components';

function App() {
  return (
    <Router>
      <main>
        <div>
          {/* Add a button to navigate to the form */}
          <Link to="/FSA">
            <button>Start Application</button>
          </Link>
          <Link to="/Dashboard">
            <button>View Dashboard</button>
          </Link>
        </div>

        {/* Define routes */}
        <Routes>
          <Route path="/FSA" element={<FormWorkFlow />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
