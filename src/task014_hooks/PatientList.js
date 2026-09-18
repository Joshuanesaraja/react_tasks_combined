import axios from "axios";
import { useEffect, useState } from "react";

function PatientList() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setPatients(response.data);
            });
    }, []);
    // the effects runs after the initial render, because of empty dependency array

    return (
        <section className="task014-card">
            <h2>API Patient List</h2>

            <ul className="patient-list">
                {patients.map((patient) => (
                    <li key={patient.id}>
                        <strong>{patient.name}</strong>
                        <span>{patient.email}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PatientList;