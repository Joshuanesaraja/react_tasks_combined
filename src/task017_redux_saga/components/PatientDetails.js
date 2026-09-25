import { useDispatch, useSelector } from "react-redux";

import {
    FETCH_PATIENT_DETAILS
} from "../redux/actions";

function PatientDetails() {
    const dispatch = useDispatch();

    const patientDetails = useSelector(
        (state) => state.patientDetails
    );

    const handlePatientClick = (patient) => {
        dispatch({
            type: FETCH_PATIENT_DETAILS,
            payload: patient.id
        });
    };

    return (
        <div className="task017-patient-details-section">

            <div className="task017-details-header">

                <div className="task017-section-title">

                    <div className="task017-details-icon">
                        +
                    </div>

                    <div>
                        <h2>Patient Details</h2>

                        <p>
                            View detailed information of selected patients
                        </p>
                    </div>

                </div>

                <div className="task017-details-buttons">

                    <button
                        className="task017-patient-select-button"
                        onClick={() =>
                            handlePatientClick({ id: 1 })
                        }
                    >
                        Patient 1
                    </button>

                    <button
                        className="task017-patient-select-button task017-patient-select-outline"
                        onClick={() =>
                            handlePatientClick({ id: 2 })
                        }
                    >
                        Patient 2
                    </button>

                </div>

            </div>

            {patientDetails && (
                <div className="task017-details">

                    <div className="task017-avatar">
                        {patientDetails.name
                            ? patientDetails.name
                                .substring(0, 2)
                                .toUpperCase()
                            : "PT"}
                    </div>

                    <div className="task017-detail-field">
                        <span>Name</span>
                        <strong>
                            {patientDetails.name}
                        </strong>
                    </div>

                    <div className="task017-detail-field">
                        <span>ID</span>
                        <strong>
                            {patientDetails.id}
                        </strong>
                    </div>

                    <div className="task017-detail-field">
                        <span>Email</span>
                        <strong>
                            {patientDetails.email}
                        </strong>
                    </div>

                    <div className="task017-detail-field">
                        <span>Phone</span>
                        <strong>
                            {patientDetails.phone}
                        </strong>
                    </div>

                </div>
            )}

        </div>
    );
}

export default PatientDetails;