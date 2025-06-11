import React, { useEffect, useState } from "react";

import style from "./ContextMenu.module.css";

export default function ContextMenu({
  setEditMenu,
  handleDelete,
  handleCreate,
  setTextStyle,
  activeStyle,
}) {
  return (
    <div className={style.container}>
      <ul>
        <li
          onClick={() => {
            setTextStyle(activeStyle);
            setEditMenu("text-section");
          }}
        >
          Edit
        </li>
        <li onClick={handleDelete}>Delete</li>
        <li onClick={handleCreate}>New</li>
      </ul>
    </div>
  );
}
