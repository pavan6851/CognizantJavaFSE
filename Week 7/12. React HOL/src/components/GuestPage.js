import React from 'react';

const GuestPage = ({ handleLogin }) => {
  return (
    <div>
      <h2>Please sign up.</h2>
      <p>Browse flight details and enjoy your journey!</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default GuestPage;
