import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails'; // Import Details Component

const Profile = () => {
  // State to hold user details
  const [user, setUser] = useState({
    name: 'Abhishek',
    age: 28,
    location: 'Ludhiana',
    profession: 'WebSite DEveloper',
    hiddenProfession: 'Tourists',
  });
  alert("From Prile Comp")

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Profile Component</h1>
      <ProfileDetails
        name={user.name}
        age={user.age}
        location={user.location}
        profession={user.profession}
      />
    </div>
  );
};

export default Profile;
