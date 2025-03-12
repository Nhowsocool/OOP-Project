import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from 'react';
import StickyHeadTable from "./components/test.jsx";
import Nursequeue from "./components/Nursequeue.jsx";
import Nurseprofile from "./components/Nurseprofile.jsx";
import PatientList from "./components/PatientList.jsx";
import PatientRegist from "./components/PatientRegist.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nursequeue" element={<Nursequeue />} />
        <Route path="/nurseprofile" element={<Nurseprofile />} />
        <Route path="/test" element={<StickyHeadTable />} />
        <Route path="/patientlist" element={<PatientList/>}/>
        <Route path="/patientregist" element={<PatientRegist/>}/>
      </Routes>
    </Router>
  );
}


export default App;