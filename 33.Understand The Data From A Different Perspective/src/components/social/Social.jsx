import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../../data";

const Social = () => {
  return (
    <div>
      <h1>Social APP </h1>
      {socialIcons.map((item) => (
        <IconItem key={item.id} item={item} />
      ))}
    </div>
  );
};

function IconItem({ item }) {
  return (
    <div>
      <FontAwesomeIcon icon={["fab", item.icon]} />
      <span>{item.tooltip}</span>
    </div>
  );
}

export default Social;
