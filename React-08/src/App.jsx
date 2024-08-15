import { useState } from 'react';
import './App.css';
import { data } from './Data';

function App() {
  const [search, setSearch] = useState('');
  const [filterKey, setFilterKey] = useState('model');

  const handleSelectChange = (e) => {
    setFilterKey(e.target.value);
  };

  const filterData = () => {
    return data.filter((item) => {
      if (search === '') return true;

      if (filterKey === 'make') {
        return item.make.toLowerCase().includes(search.toLowerCase());
      } else if (filterKey === 'model') {
        return item.model.toLowerCase().includes(search.toLowerCase());
      } else if (filterKey === 'VIN') {
        return item.vin.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });
  };

  return (
    <div>
      <form>
        <label>Search Cars:</label>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your Car..."
        />
      </form>
      <label>Sort by:</label>
      <select onChange={handleSelectChange}>
        <option value="model">Model</option>
        <option value="make">Manufacturer</option>
        <option value="VIN">VIN</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Year</th>
            <th>VIN NO.</th>
          </tr>
        </thead>
        <tbody>
          {filterData().map((item) => (
            <tr key={item.id}>
              <td>{item.make}</td>
              <td>{item.model}</td>
              <td>{item.model_year}</td>
              <td>{item.vin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
