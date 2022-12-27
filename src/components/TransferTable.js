import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import TransferReadOnlyRow from "./TransferReadOnlyRow";
import TransferEditableRow from "./TransferEditableRow";
import axios  from "axios";



const TransferTable = () => {

  const [contacts, setContacts] = useState([]);
  const [transfer, setTransfer] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await axios.get("http://localhost:5238/api/User",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      setContacts(response.data);
    }
    fetchData();

   

  },[]);

 

 
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    transferAmount: "",
  });

  

  const [editContactId, setEditContactId] = useState(null);



  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

 
  const handleEditFormSubmit = (event) => {
    const fetchTransfer = async (props)=> {
      const responseTransfer = await axios.post(`http://localhost:5238/api/Balance/BalanceTransfer?sender=20&receiver=${editContactId}&valueCarbon=${editFormData.transferAmount}`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
  
      setTransfer(responseTransfer.data);
    
    }
    

    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    fetchTransfer(); 
    setTransfer(newContacts)
    setEditContactId(editContactId);
    handleCancelClick()
  };




  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
    };

  
    setEditFormData(formValues);
   
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th style={{ color: "red", fontSize: "20px" }}>Ad</th>
              <th style={{ color: "red", fontSize: "20px" }}>Soyad</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <TransferEditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleCancelClick={handleCancelClick}
                    userId={contact.id}
                  />
                ) : (
                  <TransferReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default TransferTable;
