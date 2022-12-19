import React from "react";
import { Link } from "react-router-dom";

// Example of a data array that
// you might receive from an API
const data = [
  { name: "Ahmet", surname: "Yılmaz", age: 19, gender: "Male" },
  { name: "Ahmet", surname: "Yılmaz", age: 19, gender: "Male" },
  { name: "Ahmet", surname: "Yılmaz", age: 19, gender: "Male" },
];

function App() {
  return (
    <div className="adminPanel">
      <table>
        <tr>
          <th>Ad</th>
          <th>Soyad</th>
          <th>Cinsiyet</th>
          <th>RCY</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
