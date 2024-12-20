import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormWorkFlow from "./FormWorkFlow";
import { Dashboard } from '../ui-components';

function App() {
  return (
    <Router>
      <main>
        <div>
          {/* Add a button to navigate to the form */}
          <Link to="/">
            <button>Button 1</button>
          </Link>
        </div>
        <div><Link to="/">
            <button>Button 2</button>
          </Link>
          </div>
          <div><Link to="/">
            <button>Button 3</button>
          </Link>
          </div>
          <div><Link to="/">
            <button>Home</button>
          </Link>
          </div>
          <div><Link to="/FSA">
            <button>Start Application</button>
          </Link>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          <div>
          </div>
          <div>
          
          <Link to="/Dashboard">
            <button>View Dashboard</button>
          </Link>
          </div>
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
