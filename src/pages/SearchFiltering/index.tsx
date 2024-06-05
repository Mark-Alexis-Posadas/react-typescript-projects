import React, { useState } from "react";

const data: string[] = [
  "apple",
  "banana",
  "orange",
  "grape",
  "mango",
  "pineapple",
  "strawberry",
  "blueberry",
  "kiwi",
  "watermelon",
  "peach",
  "cherry",
  "apricot",
  "plum",
  "pear",
  "pomegranate",
  "lime",
  "lemon",
  "grapefruit",
  "coconut",
  "fig",
  "papaya",
  "dragonfruit",
  "passionfruit",
];

const SearchFiltering: React.FC = () => {
  const [filteredItem, setFilteredItem] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredItem(e.target.value);
    setVisible(true);
  };

  const handleItemClick = (item: string) => {
    setFilteredItem(item);
    setVisible(false);
  };

  const filteredFruits = data.filter((fruit) =>
    fruit.toLowerCase().includes(filteredItem.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-4xl md:text-8xl font-bold">Search Fruits</h1>
      <input
        type="text"
        className="p-3 border border-slate-200 rounded w-full"
        placeholder="search.."
        value={filteredItem}
        onChange={handleChange}
      />

      {visible && (
        <ul className="mt-3 bg-slate-50 shadow-md p-2">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((item, index) => (
              <li
                key={index}
                className="border-1 border-slate-700 rounded p-2 mb-2 last:mb-0 hover:bg-slate-300 hover:text-white cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-center">No fruits found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchFiltering;
