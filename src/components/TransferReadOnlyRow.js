import React from "react";

const TransferReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
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
