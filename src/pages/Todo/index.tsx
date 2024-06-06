import React, { useState, useEffect } from "react";
import TodosItem from "../../components/TodosItem";

interface Todo {
  index: number | null;
  text: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputVal, setInputVal] = useState<string>("");
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>({
    index: null,
    text: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputVal.trim() === "") {
      alert("please add todo");
      return;
    }
    setTodos([...todos, inputVal]);
    setInputVal("");
  };

  const handleDelete = (index: number) => {
    const deleteTodo = todos.filter((_, idx) => idx !== index);
    setTodos(deleteTodo);
  };

  const handleEdit = (index: number) => {
    setCurrentTodo({ index, text: todos[index] });
    setModalEdit(true);
  };

  const handleUpdate = () => {
    if (currentTodo.text.trim() === "") {
      alert("please enter a valid todo");
      return;
    }
    const updatedTodos: string[] = todos.map((todo, idx) =>
      idx === currentTodo.index ? currentTodo.text : todo
    );
    setTodos(updatedTodos);
    setModalEdit(false);
    setCurrentTodo({ index: null, text: "" });
  };

  return (
    <div className="p-5 md:p-0 md:max-w-[900px] m-auto relative">
      <h1 className="mt-20 font-bold text-4xl md:text-8xl">Todo List APP</h1>
      <form
        onSubmit={handleAddTodo}
        className="flex items-center justify-center gap-3 my-10"
      >
        <input
          type="text"
          className="border border-slate rounded bg-slate-50 p-2 flex-1"
          placeholder="add todo"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
          type="submit"
        >
          Add Todo
        </button>
      </form>
      {todos.length <= 0 ? (
        "No todos left"
      ) : (
        <ul>
          {todos.map((item, index) => (
            <TodosItem
              key={index}
              item={item}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isEditing={currentTodo.index === index}
            />
          ))}
        </ul>
      )}

      {modalEdit && (
        <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-center w-[500px]">
            <input
              type="text"
              className="bg-slate-100 rounded p-2 text-black w-full"
              placeholder="Edit Todo..."
              onChange={(e) =>
                setCurrentTodo({ ...currentTodo, text: e.target.value })
              }
              value={currentTodo.text}
            />
            <div className="flex items-center gap-1 ml-3">
              <button
                className="bg-blue-600 rounded p-2 text-white"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-500 text-white p-2 rounded"
                onClick={() => setModalEdit(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
