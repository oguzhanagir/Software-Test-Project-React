import React from "react";

const data = [
  {
    id: "A",
    name: "Furkan",
    surname: "Öz",
    age: 20,
    gender: "Erkek",
  },
  {
    id: "B",
    name: "Süleyman",
    surname: "Tarlacı",
    age: 40,
    gender: "Erkek",
  },
];

function PersonnelTbl() {
  return (
    <div>
      <table>
        <tr>
          <th style={{ color: "red" }}>Harf</th>
          <th style={{ color: "red" }}>Ad</th>
          <th style={{ color: "red" }}>Soyad</th>
          <th style={{ color: "red" }}>Yaş</th>
          <th style={{ color: "red" }}>Cinsiyet</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.surname}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default PersonnelTbl;
