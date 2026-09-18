import { useContext } from "react";
import PatientContext from "./context/PatientContext";

function PatientInfo() {
    const patient = useContext(PatientContext);

    return (
        <section className="task014-card">
            <h2>Patient Information</h2>

            <div className="task014-details">
                <div>
                    <span>Name</span>
                    <strong>{patient.name}</strong>
                </div>

                <div>
                    <span>Email</span>
                    <strong>{patient.email}</strong>
                </div>
            </div>
        </section>
    );
}

export default PatientInfo;