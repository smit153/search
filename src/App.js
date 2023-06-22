import React, { useEffect, useState } from "react";
import User from "./User";
import getData1 from "./utils/getData1";
import getData2 from "./utils/getData2";
import "./App.css";

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData1().then((data1) => setData1(data1));
    getData2().then((data2) => setData2(data2));
  }, []);

  const keys = ["name", "email", "address"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };
  return (
    <div className="App">
      <nav className="navbar bg-dark border-bottom border-bottom-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Navbar
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="fs-2 text-start fw-bold mb-3"> API 1</div>
        <User data={search(data1)}></User>
        <div className="fs-2 text-start fw-bold m-3 ms-0"> API 2</div>
        <User data={search(data2)}></User>
      </div>
    </div>
  );
}

export default App;
