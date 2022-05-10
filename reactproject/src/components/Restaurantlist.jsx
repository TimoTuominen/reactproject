import React from "react";
import Restaurant from "./Restaurant";

function Restaurantlist({ ravintoladata }) {
  // Tarkistetaan löytyykö tietoja
  if (!ravintoladata || ravintoladata.length === 0) {
    return <p>Ei ravintolatietoja</p>;
  }
  //Tarkistetaan onko kyseessä taulukko ( Haku ID:llä palauttaa vain yhden tietueen jonka tyypiksi tulee string), jos ei, tehdään tiedoista taulukko
  if (!Array.isArray(ravintoladata)) {
    ravintoladata = [ravintoladata];
  }

  // Palautetaan taulukon osat eriteltyinä map:in avulla
  return (
    <>
      {ravintoladata.map((item) => (
        <Restaurant key={item.id} item={item} />
      ))}
    </>
  );
}

export default Restaurantlist;
