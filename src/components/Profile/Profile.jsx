import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails'; // Import Details Component

const Profile = () => {
  // State to hold user details
  const [customeData, setcustomeData] = useState('Profile Component')
  const [user, setUser] = useState({
    name: 'Abhishek',
    age: 28,
    location: 'Ludhiana',
    profession: 'WebSite DEveloper',
    hiddenProfession: 'Tourists',
  });
  // alert("From Profile Comp")
  // setcustomeData("NEw Profile")
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{customeData}</h1>
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
