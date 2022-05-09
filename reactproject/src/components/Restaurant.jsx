import React from "react";

function Restaurant({ item }) {
  return (
    <>
      <tr>
        <th>{item.name}</th>
        <td>{item.cuisine}</td>
        <td>testi</td>
        <td>@mdo</td>
      </tr>
    </>
  );
}

export default Restaurant;
