function Profile({
    name,
    age,
    isActive,
    setName,
    setAge,
    setIsActive
}) {
    return (
        <div>
            <h2>Profile</h2>

            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label>
                Age
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
            </label>

            <div className="status-row">
                <span>Active Status</span>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    {isActive ? "Active" : "Inactive"}
                </label>
            </div>

            <div className="profile-preview">
                <h3>Profile Preview</h3>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>
                    Status:{" "}
                    <span className={isActive ? "active" : "inactive"}>
                        {isActive ? "Active" : "Inactive"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Profile;
