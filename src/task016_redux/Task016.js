import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";
import "./Task016.css";

const Task016 = () => {
    return (
        <div className="task016">
            <header className="task016-header">
                <h1>Patient List Management</h1>
            </header>

            <div className="patient-container">
                <AddPatient />
                <PatientList />
            </div>
        </div>
    );
};

export default Task016;