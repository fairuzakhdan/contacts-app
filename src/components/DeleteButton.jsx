import React from "react";

const DeleteButton = ({id,onDelete}) => {
    return  <button className="btn-close" onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;