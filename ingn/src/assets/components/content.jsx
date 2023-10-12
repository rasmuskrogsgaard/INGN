import { useEffect, useState } from "react";
import client from "../Utility/client";
import style from "./content.module.scss";
import { NavBar } from "./nav";

export const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Alle'); // Default to 'Alle'

  useEffect(() => {
    client.getEntries({ content_type: "news" })
      .then((response) => {
        setData(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Filter the data based on the selected category
  const filteredData = data.filter((item) => selectedCategory === 'Alle' || item.fields.category === selectedCategory);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul className={style.navStyle}>
            <li className={style.navTitle}> INGN</li>
            {['Alle', 'Indland', 'Udland', 'Teknologi', 'Sport', 'Politik', 'Samfund'].map((category) => (
              <li key={category} onClick={() => handleCategorySelect(category)}>
                {category}
              </li>
            ))}
          </ul>
          <ul className={style.gridContainer}>
            {filteredData.map((item) => (
              <div className={style.gridItem} key={item.sys.id}>
                <h2>{item.fields.title}</h2>
                <p>{item.fields.date} - {item.fields.author}</p>
                <p>{item.fields.contentImage.fields.title}</p>
                <img
                  src={item.fields.contentImage.fields.file.url}
                  alt={item.fields.contentImage.fields.title}
                  className={style.image}
                />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
