import React from "react";

function Restaurant({ item }) {
  // Lisätään taulukkoon MAP:in kanssa eritelly taulukon osiot
  return (
    <>
      <tr key={item._id}>
        <th>{item.name}</th>
        <td>{item.borough}</td>
        <td>{item.cuisine}</td>
        <td>{item._id}</td>
        <td>{item.restaurant_id}</td>
      </tr>
    </>
  );
}

export default Restaurant;
