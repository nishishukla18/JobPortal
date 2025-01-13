import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Applications from './Pages/Applications';
import ApplyJob from './Pages/ApplyJob';
import RecuiterLogin from './Components/RecuiterLogin';
import { AppContext } from './Context/AppContext';
import Dashboard from './Pages/Dashboard';
import AddJob from './Pages/AddJob';
import ManageJob from './Pages/ManageJob';
import ViewApplications from './Pages/ViewApplications';
import 'quill/dist/quill.snow.css'

function App() {
  const { showRecuiter, setShowRecuiter } = useContext(AppContext);
  return (
    <div>
      {showRecuiter && <RecuiterLogin onClose={() => setShowRecuiter(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        
        {/* Dashboard Route with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJob />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
