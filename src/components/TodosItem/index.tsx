import React from "react";

interface TodoItemType {
  item: string;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  isEditing: boolean;
}

const TodosItem: React.FC<TodoItemType> = ({
  item,
  index,
  handleEdit,
  handleDelete,
  isEditing,
}) => {
  return (
    <li
      key={index}
      className={`border ${
        isEditing ? "border-green-500" : "border-slate-50"
      } rounded p-2 flex items-center justify-between bg-white shadow-md`}
    >
      {item}
      <div className="flex items-center gap-3">
        <button
          className="bg-blue-600 text-white rounded p-2"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 text-white rounded p-2"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodosItem;
