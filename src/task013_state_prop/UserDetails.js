function UserDetails({ userDetails, updateUserDetails }) {
    return (
        <div>
            <h2>User Details</h2>

            <label>
                City
                <input
                    type="text"
                    value={userDetails.city}
                    onChange={(e) =>
                        updateUserDetails("city", e.target.value)
                    }
                />
            </label>

            <label>
                Role
                <input
                    type="text"
                    value={userDetails.role}
                    onChange={(e) =>
                        updateUserDetails("role", e.target.value)
                    }
                />
            </label>

            <div className="details-preview">
                <h3>Current Details</h3>

                <div className="detail-item">
                    <span>City</span>
                    <strong>{userDetails.city}</strong>
                </div>

                <div className="detail-item">
                    <span>Role</span>
                    <strong>{userDetails.role}</strong>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
