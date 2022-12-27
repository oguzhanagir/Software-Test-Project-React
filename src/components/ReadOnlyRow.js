import React, { useState, Fragment,useEffect } from "react";
import axios from "axios";



const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const [balances, setBalances] = useState([])

  const fetchBalance = async ()=> {
    const response = await axios.get(`http://localhost:5238/api/Balance/GetBalance?id=${contact.id}`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    setBalances(response.data);
  }
  fetchBalance();

  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.mail}</td>
      <td>{balances}</td>
      <td>{contact.shaAddress}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Değiştir
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Sil
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
