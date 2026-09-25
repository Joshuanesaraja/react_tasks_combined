import { useState } from "react";
import { useDispatch } from "react-redux";
import { SUBMIT_PATIENT_FORM } from "../redux/actions";

function PatientForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        disease: "",
        doctor: ""
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: SUBMIT_PATIENT_FORM,
            payload: formData
        });
    };

    return (
        <div className="task017-patient-form-section">
            <h2>Add Patient</h2>

            <form
                className="task017-form"
                onSubmit={handleSubmit}
            >
                <div className="task017-form-group">
                    <label>Patient Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter patient name"
                    />
                </div>

                <div className="task017-form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                    />
                </div>

                <div className="task017-form-group">
                    <label>Disease</label>
                    <input
                        type="text"
                        name="disease"
                        value={formData.disease}
                        onChange={handleChange}
                        placeholder="Enter disease"
                    />
                </div>

                <div className="task017-form-group">
                    <label>Doctor Assigned</label>
                    <input
                        type="text"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        placeholder="Enter doctor name"
                    />
                </div>

                <button
                    type="submit"
                    className="task017-button task017-form-submit"
                >
                    Submit Patient
                </button>
            </form>
        </div>
    );
}

export default PatientForm;