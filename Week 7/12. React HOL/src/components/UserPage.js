import React from 'react';

const UserPage = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome back</h2>
      <p>Book your flight tickets below:</p>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {/* You can add booking options here */}
        <h3>Available Flights:</h3>
        <ul>
          <li>Flight A - $500</li>
          <li>Flight B - $700</li>
          <li>Flight C - $900</li>
        </ul>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default UserPage;
