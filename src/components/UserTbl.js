import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import UserData from "../Data/UserData.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const UserTbl = () => {
  const [contacts, setContacts] = useState(UserData);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    surname: "",
    phoneNumber: "",
    email: "",
    RCY: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    surname: "",
    phoneNumber: "",
    email: "",
    RCY: "",
  });

  const [editContactId, setEditContactId] = useState(null);

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
      fullName: addFormData.fullName,
      surname: addFormData.surname,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      RCY: addFormData.RCY,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      surname: editFormData.surname,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
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
      fullName: contact.fullName,
      surname: contact.surname,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
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
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th style={{ color: "red", fontSize: "20px" }}>Ad</th>
              <th style={{ color: "red", fontSize: "20px" }}>Soyad</th>
              <th style={{ color: "red", fontSize: "20px" }}>
                Telefon Numarası
              </th>
              <th style={{ color: "red", fontSize: "20px" }}>E-posta adresi</th>
              <th style={{ color: "red", fontSize: "20px" }}>RCY</th>
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

      <h3 style={{ color: "red", fontSize: "30px" }}>Kullanıcı ekle</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Lütfen ad giriniz"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="surname"
          required="required"
          placeholder="Lütfen soyad giriniz"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Lütfen telefon numarası giriniz"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Lütfen e-posta adresi giriniz"
          onChange={handleAddFormChange}
        />
        <button type="submit">Kullanıcı ekle</button>
      </form>
    </div>
  );
};

export default UserTbl;
