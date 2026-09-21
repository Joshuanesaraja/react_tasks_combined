import { memo } from "react";

function PatientCard({ patient, onClick }) {
    console.log("PatientCard rendered:", patient.name);

    return (
        <li className="patient-card">
            <p className="patient-card-name">{patient.name}</p>

            <button onClick={() => onClick(patient)}>
                Select
            </button>
        </li>
    );
}

export default memo(PatientCard);

// Compare child PROPS
// and potentially skip its render