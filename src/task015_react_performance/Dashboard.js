import { useMemo } from "react";

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

const doctors = [
    { id: 1, name: "Dr. Kumar" },
    { id: 2, name: "Dr. Priya" },
    { id: 3, name: "Dr. Arun" },
    { id: 4, name: "Dr. Meena" },
    { id: 5, name: "Dr. Raj" },
];

function Dashboard() {
    console.log("Dashboard rendered");

    const totalPatients = useMemo(() => {
        console.log("Calculating total patients");
        return patients.length;
    }, []);

    const totalDoctors = useMemo(() => {
        console.log("Calculating total doctors");
        return doctors.length;
    }, []);


    return (
        <div>
            <h2 className="task015-page-title">Dashboard</h2>

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>Total Patients</h3>
                    <p className="dashboard-count">{totalPatients}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Doctors</h3>
                    <p className="dashboard-count">{totalDoctors}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;