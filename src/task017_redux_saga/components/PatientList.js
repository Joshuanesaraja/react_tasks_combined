import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FETCH_PATIENTS } from "../redux/actions";

function PatientList() {
    const dispatch = useDispatch();

    const patients = useSelector(
        (state) => state.patients
    );

    const [currentPage, setCurrentPage] = useState(1);

    const patientsPerPage = 5;

    const totalPages = Math.ceil(
        patients.length / patientsPerPage
    );

    const startIndex =
        (currentPage - 1) * patientsPerPage;

    const currentPatients = patients.slice(
        startIndex,
        startIndex + patientsPerPage
    );

    const handleFetchPatients = () => {
        dispatch({
            type: FETCH_PATIENTS
        });
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="task017-patient-list-section">

            <div className="task017-section-header">

                <div className="task017-section-title">

                    <div className="task017-section-icon">
                        +
                    </div>

                    <div>
                        <h2>Patient List</h2>

                        <p>
                            Manage and view all patients
                        </p>
                    </div>

                </div>

                <button
                    className="task017-button task017-fetch-button"
                    onClick={handleFetchPatients}
                >
                    ↻ &nbsp; Fetch Patients
                </button>

            </div>

            <div className="task017-patient-list">

                {currentPatients.map((patient) => (
                    <div
                        className="task017-patient-item"
                        key={patient.id}
                    >
                        <span className="task017-patient-number">
                            {patient.id}
                        </span>

                        <p>{patient.name}</p>
                    </div>
                ))}

            </div>

            <div className="task017-list-footer">

                <span className="task017-showing-text">
                    Showing{" "}
                    {currentPatients.length} patients
                </span>

                <div className="task017-pagination">

                    <button
                        className="task017-pagination-button"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        ‹ &nbsp; Previous
                    </button>

                    <span className="task017-page-info">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        className="task017-pagination-button task017-next-button"
                        onClick={handleNextPage}
                        disabled={
                            currentPage === totalPages
                        }
                    >
                        Next &nbsp; ›
                    </button>

                </div>

            </div>

        </div>
    );
}

export default PatientList;