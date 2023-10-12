// NavBar.js
import React from "react";
import style from "./nav.module.scss";

export const NavBar = ({ onCategorySelect }) => {
  const categories = ['Alle', 'Indland', 'Udland', 'Teknologi', 'Sport', 'Politik', 'Samfund'];

  return (
    <div>
      <ul className={style.navStyle}>
        <li className={style.navTitle}> INGN</li>
        {categories.map((category) => (
          <li key={category} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
      </ul>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
  );
};

