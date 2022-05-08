import React from "react";
//import { useState } from "react";

function Restaurantlist({ ravintoladata }) {
  console.log(ravintoladata);
  console.log(ravintoladata[0].nameof);
  return (
    <>
      <tr>
        <th>{ravintoladata[0].nameof}</th>
        <td>{ravintoladata[0].address}</td>
        <td>testi</td>
        <td>@mdo</td>
      </tr>
    </>
  );
}

export default Restaurantlist;
