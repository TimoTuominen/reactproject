import React from "react";
import Restaurant from "./Restaurant";
//import { useState } from "react";

function Restaurantlist({ ravintoladata }) {
  if (!ravintoladata || ravintoladata.length === 0) {
    return <p>Ei ravintolatietoja</p>;
  }

  //console.log(ravintoladata);
  //console.log(ravintoladata.name);
  return (
    <>
      {ravintoladata.map((item) => (
        <Restaurant key={item.id} item={item} />
      ))}
    </>
  );
}

export default Restaurantlist;
