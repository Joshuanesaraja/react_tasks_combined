import { useState } from "react";

function Profile({
    name,
    age,
    isActive,
    setName,
    setAge,
    setIsActive
}) {
    const [ageTouched, setAgeTouched] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);

    return (

        <div>
            <h2>Profile</h2>

            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onFocus={() => setNameTouched(true)}
                    onChange={(e) => {
                        const value = e.target.value;

                        if (/^[A-Za-z ]*$/.test(value)) {
                            setName(value);
                        }
                    }}
                    placeholder="Enter your name"
                />

                {nameTouched && name.trim() === "" && (
                    <span className="error">
                        Name is required
                    </span>
                )}
            </label>

            <label>
                Age
                <input
                    type="number"
                    value={age}
                    min="1"
                    max="120"
                    onFocus={() => setAgeTouched(true)}
                    onChange={(e) => {
                        const value = e.target.value;

                        if (value === "") {
                            setAge("");
                            return;
                        }

                        const numberValue = Number(value);

                        if (numberValue >= 1 && numberValue <= 120) {
                            setAge(numberValue);
                        }
                    }}
                    placeholder="Enter your age"
                />

                {ageTouched && age === "" && (
                    <span className="error">
                        Age is required
                    </span>
                )}

            </label>

            <div className="status-row">
                <span>Activity Status</span>

                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

            <div className="profile-preview">
                <h4>Profile Preview</h4>

                <div className="detail-item">
                    <span>Name</span>
                    <strong>{name}</strong>
                </div>

                <div className="detail-item">
                    <span>Age</span>
                    <strong>{age}</strong>
                </div>

                <div className="detail-item">
                    <span>Status</span>
                    <strong className={isActive ? "active" : "inactive"}>
                        {isActive ? "Active" : "Inactive"}
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default Profile;
