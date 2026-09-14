import { useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import UserDetails from "./UserDetails";
import "./Task013.css";

function Task013() {
    const [name, setName] = useState("Joshua");

    const [age, setAge] = useState(22);

    const [isActive, setIsActive] = useState(true);

    const [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "React"
    ]);

    const [userDetails, setUserDetails] = useState({
        city: "Chennai",
        role: "Developer"
    });

    function addSkill(newSkill) {
        setSkills([...skills, newSkill]);
    }

    function updateUserDetails(field, value) {
        setUserDetails({
            ...userDetails,
            [field]: value
        });
    }

    return (
        <div className="task013">
            <header className="task013-header">
                <h1>User Profile Management</h1>
                <p>Manage your profile information and skills</p>
            </header>

            <main className="task013-dashboard">

                <section className="task013-card">
                    <Profile
                        name={name}
                        age={age}
                        isActive={isActive}
                        setName={setName}
                        setAge={setAge}
                        setIsActive={setIsActive}
                    />
                </section>

                <section className="task013-card">
                    <Skills
                        skills={skills}
                        addSkill={addSkill}
                    />
                </section>

                <section className="task013-card">
                    <UserDetails
                        userDetails={userDetails}
                        updateUserDetails={updateUserDetails}
                    />
                </section>

            </main>
        </div>
    );
}

export default Task013;
