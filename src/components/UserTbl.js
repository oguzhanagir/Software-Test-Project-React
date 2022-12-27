import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
import CategoryTable from "./CategoryTable";

const UserTbl = () => {
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    RCY: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    RCY: "",
  });



  

  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [balances, setBalances] = useState({
    shaAddress:"",
    balanceValue:0
  });
  

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

    const fetchCategory = async ()=> {
      const response = await axios.get("http://localhost:5238/api/Category",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      setCategories(response.data);
    }
    fetchCategory();

    const addBalance = async ()=> {
      await axios.get(`http://localhost:5238/api/Balance/AddBalance?shaAddress=test&balanceValue=32`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      
    }
    addBalance();

    




    
  },[]);

  
 

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastname: addFormData.lastname,
      mail: addFormData.mail,
      RCY: addFormData.RCY,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastname: editFormData.lastname,
      mail: editFormData.mail,
      RCY: editFormData.RCY,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      mail: contact.mail,
      RCY: contact.RCY,
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
    <div className="app-container" >
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th style={{ color: "red", fontSize: "20px" }}>Ad</th>
              <th style={{ color: "red", fontSize: "20px" }}>Soyad</th>
              <th style={{ color: "red", fontSize: "20px" }}>E-posta adresi</th>
              <th style={{ color: "red", fontSize: "20px" }}>RCY</th>
              <th style={{ color: "red", fontSize: "20px" }}>SHA Adresi</th>
              <th style={{ color: "red", fontSize: "20px" }}>Eylemler</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
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
      <br></br>
      <br></br>

      <form>
        <input
            type="text"
            required="required"
            placeholder="SHA Adresi Giriniz"
            name="shaAddress"
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          ></input>
          <input
            type="text"
            required="required"
            placeholder="Coin Miktari Giriniz"
            name="balanceValue"
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          ></input>
      </form>
    
      {categories.map((category)=>(
      <CategoryTable categories={category}>
        
      </CategoryTable>
    ))}
   
    </div>
  );
};

export default UserTbl;
