import { useContext } from "react";
import PatientContext from "../context/PatientContext";

function Navbar() {
  const patient = useContext(PatientContext);

  return (
    <nav className="task014-navbar">
      <span>Patient Dashboard</span>
      <span>Welcome, {patient.name}</span>
    </nav>
  );
}

export default Navbar;