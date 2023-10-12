export const filterByCategory = (data, selectedCategory) => {
    return data.filter((item) => selectedCategory === 'Alle' || item.fields.category === selectedCategory);
  };