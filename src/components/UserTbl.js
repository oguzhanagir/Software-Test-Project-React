import React from "react";

const data = [
  {
    number: 1,
    name: "Ahmet",
    surname: "Yılmaz",
    age: 25,
    gender: "Erkek",
    rcy: 100,
  },
  {
    number: 2,
    name: "Mehmet",
    surname: "Gezer",
    age: 39,
    gender: "Erkek",
    rcy: 560,
  },
  {
    number: 3,
    name: "Ersin",
    surname: "Yıkılmaz",
    age: 62,
    gender: "Erkek",
    rcy: 8000,
  },
  {
    number: 4,
    name: "Mahmut",
    surname: "Güven",
    age: 33,
    gender: "Erkek",
    rcy: 1002,
  },
  {
    number: 5,
    name: "Bora",
    surname: "Yerli",
    age: 56,
    gender: "Erkek",
    rcy: 5330,
  },
  {
    number: 6,
    name: "Cem",
    surname: "Bahçeci",
    age: 45,
    gender: "Erkek",
    rcy: 10850,
  },
];

function UserTbl() {
  return (
    <div>
      <table>
        <tr>
          <th style={{ color: "red" }}>Sıra</th>
          <th style={{ color: "red" }}>Ad</th>
          <th style={{ color: "red" }}>Soyad</th>
          <th style={{ color: "red" }}>Yaş</th>
          <th style={{ color: "red" }}>Cinsiyet</th>
          <th style={{ color: "red" }}>RCY Miktarı</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.number}</td>
              <td>{val.name}</td>
              <td>{val.surname}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.rcy}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default UserTbl;
