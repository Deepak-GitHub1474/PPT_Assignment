import React from "react";

export default function LandingPage() {
    const [userId, setUserId] = React.useState("");
    const [userData, setUserData] = React.useState(null);

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.github.com/users/${userId}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id="search-container">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={userId}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            {userData && (
                <div className="user-data-container" id="userInfo">
                    <div className="image-container">
                        <img src={userData.avatar_url} alt="User Avatar" id="user-image" />
                    </div>

                    <div className="user-info">
                        <div id="name">Name: {userData.name}</div>
                        <div>Portfolio: 
                            <a href="https://github.com/Deepak-GitHub1474" id="portfolio">Portfolio: {userData.portfolio}</a>
                        </div>
                        <div id="location">Location: {userData.location}</div>
                        <div id="repo">Public Repo: {userData.public_repos}</div>
                        <div id="followers">Followers: {userData.followers}</div>
                        <div id="bio">Bio: {userData.bio}</div>
                    </div>
                </div>
            )}
        </div>
    );
}


