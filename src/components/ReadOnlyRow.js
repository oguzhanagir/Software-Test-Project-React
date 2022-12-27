import React, { useState,useEffect } from "react";
import axios from "axios";



const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const [balances, setBalances] = useState([])
  const [balanceSub, setBalanceSub] = useState({
    balanceValue:0
  });

  const balanceSubmit = () => {
    const addBalance = async ()=> {
      await axios.post(`http://localhost:5238/api/Balance/AddBalance?id=${contact.id}&balanceValue=${balanceSub.balanceValue}`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      
    }
    addBalance();
  };
  const balanceChange = (event) => {
    setBalanceSub({
      ...balanceSub,
      [event.target.name]: event.target.value
    });
  };
 
 

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
      <td> <form action="/Admin" onSubmit={balanceSubmit} >
        <h2>Coin Ekleme</h2>
          <input
            type="text"
            required="required"
            placeholder="Coin Miktari Giriniz"
            name="balanceValue"
            value={balanceSub.balanceValue}
            onChange={balanceChange}
          ></input>
          <button  >Gönder</button>
      </form></td>
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
