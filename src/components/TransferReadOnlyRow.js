import React from "react";

const TransferReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.surname}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Paranı Transfer Et
        </button>
      </td>
    </tr>
  );
};

export default TransferReadOnlyRow;
