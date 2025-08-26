import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Sachin", score: 80 },
    { name: "Dhoni", score: 65 },
    { name: "Kohli", score: 95 },
    { name: "Rohit", score: 50 },
    { name: "Yuvraj", score: 90 },
    { name: "Dravid", score: 45 },
    { name: "Sehwag", score: 100 },
    { name: "Raina", score: 68 },
    { name: "Jadeja", score: 74 },
    { name: "Ashwin", score: 69 },
    { name: "Bumrah", score: 85 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h2>Filtered Players (Score &lt; 70):</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
