import React from "react";

function Restaurant({ item }) {
  return (
    <>
      <tr key={item._id}>
        <th>{item.name}</th>
        <td>{item.borough}</td>
        <td>{item.cuisine}</td>
        <td>{item._id}</td>
      </tr>
    </>
  );
}

export default Restaurant;
