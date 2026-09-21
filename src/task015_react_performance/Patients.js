import { useCallback, useMemo, useState } from "react";
import PatientCard from "./PatientCard";

const patients = [
    { id: 1, name: "Joshua" },
    { id: 2, name: "John" },
    { id: 3, name: "Riya" },
    { id: 4, name: "Arun" },
    { id: 5, name: "David" },
    { id: 6, name: "Rahul" },
    { id: 7, name: "Sneha" },
    { id: 8, name: "Michael" },
    { id: 9, name: "Sarah" },
    { id: 10, name: "Daniel" },
    { id: 11, name: "Ananya" },
    { id: 12, name: "Vikram" },
];

function Patients() {
    const [search, setSearch] = useState("");
    const [selectedPatient, setSelectedPatient] = useState(null);

    console.log("Patients component rendered");

    const filteredPatients = useMemo(() => {
        console.log("Filtering patients...");

        return patients.filter((patient) =>
            patient.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    // search contains the current search text
    // Recalculate if search changes.

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const handlePatientClick = useCallback((patient) => {
        console.log("Selected:", patient.name);
        setSelectedPatient(patient);
    }, []);

    return (
        <div>
            <h2 className="task015-page-title">Patients</h2>

            <input
                className="patient-search"
                type="text"
                placeholder="Search patients..."
                value={search}
                onChange={handleSearch}
            />

            {selectedPatient && (
                <div className="selected-patient">
                    <strong>Selected Patient:</strong>{" "}
                    {selectedPatient.name}
                </div>
            )}

            {filteredPatients.length > 0 ? (
                <ul className="patient-list">
                    {filteredPatients.map((patient) => (
                        <PatientCard
                            key={patient.id}
                            patient={patient}
                            onClick={handlePatientClick}
                        />
                    ))}
                </ul>
            ) : (
                <p className="no-results">
                    No patients found.
                </p>
            )}
        </div>
    );
}

export default Patients;