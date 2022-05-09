import "./App.css";
import Header from "./components/Header";
import Restaurantlist from "./components/Restaurantlist";
import { useState } from "react";
import ravintoladatahaku from "./data/getrestaurantdata";
//import Restaurant from "./components/Restaurant";

function App() {
  const [ravintoladata, setravintoladata] = useState(ravintoladatahaku);

  return (
    <>
      <Header />
      <h1>Hello world</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <Restaurantlist ravintoladata={ravintoladata} />
        </tbody>
      </table>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default App;
