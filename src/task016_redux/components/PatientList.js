import usePatient from "../hooks/usePatient";

const PatientList = () => {
    const { patients, deletePatient } = usePatient();
    // patients-> Read the patient list, deletePatient-> Delete a patient

    return (
        <div className="patient-list">
            <h2>Patient List</h2>

            {patients.length === 0 ? (
                <p className="empty-message">
                    No patients added yet.
                </p>
            ) : (
                <ul>
                    {patients.map((patient, index) => (
                        <li key={index}>
                            <span>
                                {index + 1}. {patient}
                            </span>

                            <button
                                onClick={() => deletePatient(patient)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PatientList;
