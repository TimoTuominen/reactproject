import "./App.css";
import Header from "./components/Header";
import Restaurantlist from "./components/Restaurantlist";
import { useState, useEffect } from "react";

function App() {
  // Luodaan "hookit" lomakkeen kenttiä varten
  let [ravintoladata, setravintoladata] = useState([]);
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");
  const [query3, setQuery3] = useState("");
  const [query4, setQuery4] = useState("");
  const [query5, setQuery5] = useState("");

  // Haku 15:sta ensimmäistä tietuetta varten
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/restaurant");
    const data = await response.json();
    setravintoladata(data);
  };

  // Haetaan tiedot useEffectin kuatta sivun latautusessa ensimmäisellä renderöintikerralla
  useEffect(() => {
    fetchData();
  }, []);

  // Datan haku ID:n perusteella
  const fetchData2 = async () => {
    const response = await fetch(
      `http://localhost:8000/api/restaurant/findbyid/${query}`
    );
    const data = await response.json();
    setravintoladata(data);
  };

  // Tietojen päivitys
  const updateData = async () => {
    const reqoptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    };
    console.log(reqoptions.body);
    const response = await fetch(
      `http://localhost:8000/api/restaurant/update/${query}/${query2}`,
      reqoptions
    );
    const data = await response.json();
    console.log(data);
  };

  // Tietojen poisto
  const deleteData = async () => {
    const response = await fetch(
      `http://localhost:8000/api/restaurant/delete/${query}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    console.log(data);
  };

  // Tietojen lisäys
  const addData = async () => {
    const reqoptions2 = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:8000/api/restaurant/add/${query3}/${query4}/${query5}`,
      reqoptions2
    );
    const data = await response.json();
    console.log(data);
  };

  // Tapahtumien käsittely, mitä ajetaan minkäkin tapahtuman yhteydessä

  // Haku ID:llä
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData2();
  };

  // Tietueen lisäsys
  const handleSubmit2 = (event) => {
    event.preventDefault();
    addData();
    alert("Tiedot lisätty");
  };

  // Kaikkien (15 ensimmäisen) tietueen haku
  const handleClick = (event) => {
    event.preventDefault();
    fetchData();
  };

  // Tietueen poisto
  const handleClick2 = (event) => {
    event.preventDefault();
    deleteData();
    alert("Tiedot poistettu");
  };

  // Tietueen päivitys
  const handleClick3 = (event) => {
    event.preventDefault();
    updateData();
    alert("Tiedot päivitetty");
  };

  //Lomakkeen HTML + react
  return (
    <>
      <Header />
      <div class="container">
        <div>
          <h1>Reastaurant list</h1>
        </div>
        <div>
          <div className="row">
            <div className="col-md">
              <form onSubmit={handleSubmit}>
                <div className="form-group" id="group2">
                  <label id="label1">Search for a restaurant ID: </label>
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="form-control"
                    name="query"
                    id="input1"
                  />
                </div>
                <div className="form-group" id="group2">
                  <label id="label1">Restauraunt ID for update: </label>
                  <input
                    type="text"
                    value={query2}
                    onChange={(event) => setQuery2(event.target.value)}
                    className="form-control"
                    name="query2"
                    id="input2"
                  />
                </div>

                <div className="form-group" id="group2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="button1"
                  >
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="button3"
                    onClick={handleClick2}
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="button4"
                    onClick={handleClick3}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md">
              <form onSubmit={handleSubmit2}>
                <div className="form-group" id="group2">
                  <label id="label1">Restaurant name: </label>
                  <input
                    type="search"
                    value={query3}
                    onChange={(event) => setQuery3(event.target.value)}
                    className="form-control"
                    name="query3"
                    id="input1"
                  />
                </div>
                <div className="form-group" id="group2">
                  <label id="label1">Borough</label>
                  <input
                    type="text"
                    value={query4}
                    onChange={(event) => setQuery4(event.target.value)}
                    className="form-control"
                    name="query4"
                    id="input2"
                  />
                </div>
                <div className="form-group" id="group2">
                  <label id="label1">Restauraunt ID: </label>
                  <input
                    type="text"
                    value={query5}
                    onChange={(event) => setQuery5(event.target.value)}
                    className="form-control"
                    name="query5"
                    id="input2"
                  />
                </div>
                <button type="submit" className="btn btn-primary" id="button1">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Restaurant</th>
                <th scope="col">Borough</th>
                <th scope="col">Cuisine</th>
                <th scope="col">ID</th>
                <th scope="col">restaurant ID</th>
              </tr>
            </thead>
            <tbody>
              <Restaurantlist ravintoladata={ravintoladata} />
            </tbody>
          </table>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </>
  );
}
//muutos
//muutos2
export default App;
