import { useState } from "react";

function Skills({ skills, addSkill }) {
    const [newSkill, setNewSkill] = useState("");

    // "Skill is required" will show even before the user starts typing. 
    // So make it appear only after they actually try to add an empty skill.
    const [skillError, setSkillError] = useState(false);

    function handleAddSkill() {
        if (newSkill.trim() === "") {
            setSkillError(true);
            return;
        }

        addSkill(newSkill.trim());
        setNewSkill("");
        setSkillError(false);
    }

    return (
        <div>
            <h2>Skills</h2>

            {/* skills is used to display the existing skills. */}
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

            {skillError && (
                <span className="error">
                    Skill is required
                </span>
            )}
        </div>
    );
}

export default Skills;
