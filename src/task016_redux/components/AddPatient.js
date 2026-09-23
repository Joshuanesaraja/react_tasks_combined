import { useState } from "react";
import usePatient from "../hooks/usePatient";

const AddPatient = () => {
    const [name, setName] = useState("");

    const { addPatient } = usePatient();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name.trim()) {
            return;
        }

        addPatient(name.trim());
        setName("");
    };

    return (
        <form className="add-patient-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter patient name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">
                Add Patient
            </button>
        </form>
    );
};

export default AddPatient;