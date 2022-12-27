import axios from "axios";
import React, { useState, Fragment,useEffect } from "react";


const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
  handleCancelClick,
  userId
}) => {



  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Miktar Giriniz"
          name="transferAmount"
          value={editFormData.transferAmount}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={handleEditFormSubmit}>Onayla</button>
        <button type="button" onClick={handleCancelClick}>
          İptal et
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
