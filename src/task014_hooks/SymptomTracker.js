import { useEffect, useRef, useState } from "react";

function SymptomTracker() {

    // create a ref object.
    const symptomInput = useRef();

    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        symptomInput.current.focus();
    }, []);

    const addSymptom = () => {
        const symptom = symptomInput.current.value.trim();

        if (symptom !== "") {
            setSymptoms([...symptoms, symptom]);
            symptomInput.current.value = "";
        }
    };

    return (
        <section className="task014-card">
            <h2>Symptom Tracker</h2>

            <div className="symptom-input">
                {/* Connect this ref to this input element. */}
                <input
                    type="text"
                    ref={symptomInput}
                    placeholder="Enter symptom"
                />

                <button onClick={addSymptom}>
                    Add Symptom
                </button>
            </div>

            {symptoms.length > 0 ? (
                <ul className="symptoms-list">
                    {symptoms.map((symptom, index) => (
                        <li key={index} className="symptom-tag">
                            {symptom}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-symptoms">
                    No symptoms added yet.
                </p>
            )}
        </section>
    );
}

export default SymptomTracker;