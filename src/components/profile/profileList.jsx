import { useState } from "react";

function ProfileList() {
    const [nav, setNav] = useState(1);

    return (  
        <div className="profile-list">
            <div className="nav">
                <div onClick={() => setNav(1)} className={nav === 1 ? "active" : ""}>
                    Sotib olingan kurslar
                </div>
                <div onClick={() => setNav(2)} className={nav === 2 ? "active" : ""}>
                    Avval xarid qilingan
                </div>
            </div>
        </div>
    );
}

export default ProfileList;