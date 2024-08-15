import React, { useState } from "react";
import { data } from "./Data";
function App() {
  const [search, setSearch] = useState("");
  const [fname, setFname] = useState(false)
  const [lname, setlname] = useState(false)
  const [country, setCountry] = useState(false)


  const handleSelectChange = (e) => {
    if (e.target.value === 'fname') {
      setFname(true);
    } else {
      setFname(false);
    }
    if (e.target.value === 'lname') {
      setlname(true);
    } else {
      setlname(false);
    }
    if (e.target.value === 'country') {
      setCountry(true);
    } else {
      setCountry(false);
    }
  };


  return (
    <div className=" flex justify-center flex-col">
      <form>
        <label>Search Cars.:</label>
        <input className="w-96  border-black p-2 mb-4" type="search" placeholder="Search the country" onChange={(e) => setSearch(e.target.value)} />
      </form>
      <label>Sort By:</label>
      <select onChange={handleSelectChange}>
        <option value='fname'>Manufacturer</option>
        <option value='lname'>Model</option>
        <option value='country'>year</option>
      </select>
      <table className="border-black ">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
            <th> Year</th>
            <th>VIN NO.</th>
          </tr>
        </thead>
        <tbody>
          {
            fname && (
              data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.make.toLowerCase().includes(search);
                })
            ).map((item) => (
              <tr className="hover:bg-gray-400" key={item.id}>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td>{item.model_year}</td>
                <td>{item.vin}</td>
              </tr>
            )) || lname && (
              data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.model.toLowerCase().includes(search);
                })
            ).map((item) => (
              <tr className="hover:bg-gray-400" key={item.id}>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td>{item.model_year}</td>
                <td>{item.vin}</td>
              </tr>
            )) || country && (
              data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.model_year.toLowerCase().includes(search);
                })
            ).map((item) => (
              <tr className="hover:bg-gray-400" key={item.id}>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td>{item.model_year}</td>
                <td>{item.vin}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
