import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Miktar Giriniz"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Onayla</button>
        <button type="button" onClick={handleCancelClick}>
          İptal et
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
