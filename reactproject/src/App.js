import "./App.css";
import Header from "./components/Header";
import Restaurantlist from "./components/Restaurantlist";
import { useState, useEffect } from "react";
import ravintoladatahaku from "./data/getrestaurantdata";
//import Restaurant from "./components/Restaurant";

function App() {
  const [ravintoladata, setravintoladata] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://192.168.0.101:8000/api/restaurant");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setravintoladata(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {};

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <div>
        <h1>Reastaurant list</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group" id="group2">
            <label id="label1">Search for a restaurant ID: </label>
            <input
              type="search"
              //value={query}
              //onChange={(event) => setQuery(event.target.value)}
              className="form-control"
              name="query"
              id="input1"
            />
          </div>
          <div className="form-group" id="group2">
            <button type="submit" className="btn btn-primary" id="button1">
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              id="button2"
              onClick={handleClick}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Restaurant</th>
              <th scope="col">Borough</th>
              <th scope="col">Cuisine</th>
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            <Restaurantlist ravintoladata={ravintoladata} />
          </tbody>
        </table>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default App;
