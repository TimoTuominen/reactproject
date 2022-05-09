import React from "react";

function Restaurant({ item }) {
  return (
    <>
      <tr>
        <th>{item.nameof}</th>
        <td>{item.address}</td>
        <td>testi</td>
        <td>@mdo</td>
      </tr>
    </>
  );
}

export default Restaurant;
