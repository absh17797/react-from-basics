import React from 'react';

const Details = ({ name, age, location, profession }) => {
  alert("From Details Comp")

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
      <h2>Details Component</h2>
      <p><strong>Name: </strong> {name}</p>
      <p><strong>Age: </strong> {age}</p>
      <p><strong>Location: </strong> {location}</p>
      <p><strong>Profession: </strong> {profession}</p>
    </div>
  );
};

export default Details;
