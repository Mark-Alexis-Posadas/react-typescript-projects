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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredItem(e.target.value);
  };

  const handleItemClick = (item: string) => {
    setFilteredItem(item);
  };

  const filteredFruits = data.filter((fruit) =>
    fruit.toLowerCase().includes(filteredItem.toLowerCase())
  );

  return (
    <div className="p-5">
      <input
        type="text"
        className="p-3 border border-slate-200 rounded w-full"
        placeholder="search.."
        value={filteredItem}
        onChange={handleChange}
      />

      <ul className="mt-3 bg-slate-50 shadow-md p-2">
        {filteredFruits.map((item, index) => (
          <li
            key={index}
            className="border-1 border-slate-700 rounded p-2 mb-2 hover:bg-slate-300 hover:text-white cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFiltering;
