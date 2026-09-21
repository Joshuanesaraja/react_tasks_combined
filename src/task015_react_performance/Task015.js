import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Dashboard from "./Dashboard";
import "./Task015.css";

// const Patients = lazy(() => import("./Patients"));

// Making the fallback visible, since our components are extremely small,
// "Loading..." may disappear too quickly to see.

const Patients = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import("./Patients"));
        }, 1500);
    });
});

const Doctors = lazy(() => import("./Doctors"));

function Task015() {
    return (
        <BrowserRouter>
            <div className="task015-container">
                <header className="task015-header">
                    <h1>Healthcare Dashboard</h1>

                    <nav className="task015-nav">
                        <Link to="/">Dashboard</Link>
                        <Link to="/patients">Patients</Link>
                        <Link to="/doctors">Doctors</Link>
                    </nav>
                </header>

                <main className="task015-main">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />

                        <Route
                            path="/patients"
                            element={
                                <Suspense
                                    fallback={
                                        <div className="loading-message">
                                            <h2>Loading Patients...</h2>
                                        </div>
                                    }
                                >
                                    <Patients />
                                </Suspense>
                            }
                        />

                        <Route path="/doctors" element={<Doctors />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default Task015;
