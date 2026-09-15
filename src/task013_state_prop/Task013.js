import { useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import UserDetails from "./UserDetails";
import "./Task013.css";

function Task013() {
    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    const [isActive, setIsActive] = useState(false);

    const [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "React"
    ]);

    const [userDetails, setUserDetails] = useState({
        city: "",
        role: ""
    });

    // This is a callback function
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
                    <UserDetails
                        // current object
                        userDetails={userDetails}
                        // a function that can add a new detail
                        updateUserDetails={updateUserDetails}
                    />
                </section>

                <section className="task013-card">
                    <Skills
                        // current array
                        skills={skills}
                        // a function that can add a new skill
                        addSkill={addSkill}
                    />
                </section>

            </main>

            <footer className="task013-footer">
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

export default Task013;
