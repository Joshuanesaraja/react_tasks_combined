import { useState } from "react";

function UserDetails({ userDetails, updateUserDetails }) {
    const [cityTouched, setCityTouched] = useState(false);
    const [roleTouched, setRoleTouched] = useState(false);

    return (
        <div>
            <h2>User Details</h2>

            <label>
                City
                <input
                    type="text"
                    value={userDetails.city}
                    onFocus={() => setCityTouched(true)}
                    onChange={(e) => {
                        const value = e.target.value;

                        if (/^[A-Za-z ]*$/.test(value)) {
                            updateUserDetails("city", value);
                        }
                    }}
                    placeholder="Enter your city"
                />

                {cityTouched && userDetails.city.trim() === "" && (
                    <span className="error">
                        City is required
                    </span>
                )}
            </label>

            <label>
                Role
                <input
                    type="text"
                    value={userDetails.role}
                    onFocus={() => setRoleTouched(true)}
                    onChange={(e) =>
                        updateUserDetails("role", e.target.value)
                    }
                    placeholder="Enter your role"
                />

                {roleTouched && userDetails.role.trim() === "" && (
                    <span className="error">
                        Role is required
                    </span>
                )}
            </label>

            <div className="details-preview">
                <h4>Details Preview</h4>

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