function Doctors() {
    console.log("Doctors rendered");

    const doctors = [
        { id: 1, name: "Dr. Kumar", specialty: "Cardiology" },
        { id: 2, name: "Dr. Priya", specialty: "Pediatrics" },
        { id: 3, name: "Dr. Arun", specialty: "Neurology" },
        { id: 4, name: "Dr. Meena", specialty: "Dermatology" },
        { id: 5, name: "Dr. Raj", specialty: "Orthopedics" },
    ];

    return (
        <div>
            <h2 className="task015-page-title">Doctors</h2>

            <ul className="doctor-list">
                {doctors.map((doctor) => (
                    <li className="doctor-card" key={doctor.id}>
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialty}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Doctors;