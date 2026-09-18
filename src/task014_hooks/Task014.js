import PatientContext from "./context/PatientContext";
import Navbar from "./components/Navbar";
import PatientInfo from "./PatientInfo";
import PatientList from "./PatientList";
import SymptomTracker from "./SymptomTracker";
import HookExperiment from "./HookExperiment";
import "./Task014.css";

function Task014() {
    const patient = {
        name: "John Doe",
        email: "patient@test.com"
    };

    return (

        <div className="task014">
            <header className="task014-header">
                <h1>Patient Data & Symptom Tracker</h1>
                <p>React Hooks Practice</p>
            </header>

            {/* A Context Provider is a component 
            that makes a value available to all descendant components that consume that Context using useContext(). */}

            <PatientContext.Provider value={patient}>

                <Navbar />

                <main className="task014-dashboard">
                    {/* useContext */}
                    <PatientInfo />

                    {/* useEffect */}
                    <PatientList />

                    {/* useRef and useState */}
                    <SymptomTracker />

                    {/* diff b/w useRef and useState */}
                    <HookExperiment />
                </main>

            </PatientContext.Provider>

            <footer className="task014-footer">
                <p>
                    © 2026 Joshua Nesaraja · Capminds · React Tasks
                </p>

                <a
                    href="https://github.com/Joshuanesaraja/react_tasks_combined"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Repository
                </a>
            </footer>
        </div>
    );
}

export default Task014;