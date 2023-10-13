import { useEffect, useState } from "react";
import client from "../script/client";
import style from "./content.module.scss";
import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
      alignItems: "center",
      textAlign: "center",
    },
  };

  useEffect(() => {
    client
      .getEntries({ content_type: "news" })
      .then((response) => {
        setData(response.items);
        setLoading(false);
        console.log(response.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter(
    (item) =>
      selectedCategory === "Alle" || item.fields.category === selectedCategory
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  //modal

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            {" "}
            <p>
              Da Københavns politi mandag morgen mædte ind på stationen fik de
              sig noget af en overraskelse...
            </p>
          </Modal>

          <ul className={style.navStyle}>
         
            <li className={style.navTitle}> INGN</li>
            {[
              "Alle",
              "Indland",
              "Udland",
              "Teknologi",
              "Sport",
              "Politik",
              "Samfund",
            ].map((category) => (
              <li key={category} onClick={() => handleCategorySelect(category)}>
                {category}
              </li>
              
            ))}
             <FontAwesomeIcon icon={faBars} style={{color: "#b81414",}} />
          </ul>
          <div
            className={style.gridContainer}
            
          >
            {filteredData.map((item, index) => (
              <div className={style.gridItem} key={item.sys.id} style={{ gridArea: "a" + (index + 1) }}>
               
                <h2>{item.fields.title}</h2>
                <p>
                  {item.fields.date} - {item.fields.author}
                </p>
                <button onClick={openModal}>Læs Mere</button>
                <p>{item.fields.contentImage.fields.title}</p>
                <img
                  src={item.fields.contentImage.fields.file.url}
                  alt={item.fields.contentImage.fields.title}
                  className={style.image}
                />
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
