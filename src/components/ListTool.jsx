import React from "react";

const ListTool = ({ text }) => {
  return (
    <li>
      <span className="text-green-400">
        <ion-icon name="checkbox"></ion-icon>
      </span>{" "}
      {text}
    </li>
  );
};

export default ListTool;
