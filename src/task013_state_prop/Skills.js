import { useState } from "react";

function Skills({ skills, addSkill }) {
    const [newSkill, setNewSkill] = useState("");

    function handleAddSkill() {
        if (newSkill.trim() !== "") {
            addSkill(newSkill);
            setNewSkill("");
        }
    }

    return (
        <div>
            <h2>Skills</h2>

            <div className="skills-list">
                {skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>

            <div className="skill-input">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Enter a skill"
                />

                <button onClick={handleAddSkill}>
                    Add Skill
                </button>
            </div>
        </div>
    );
}

export default Skills;
