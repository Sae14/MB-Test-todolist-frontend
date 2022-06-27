import React from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Todo = ({ todo }) => {
  return (
    <div className="shadow-md bg-grey my-5 rounded-xl p-2 flex flex-wrap justify-between md:mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6">
      <h3
        className="mb-4"
        style={{ textDecoration: todo.state ? "line-through" : "none" }}
      >
        {todo.title}
      </h3>

      <div className="flex items-center">
        <NavLink to={"/MB-Test-todolist-frontend/details/" + todo.id}>
          <button className="mr-2 bg-green p-2 rounded-full text-sm border-2 border-greenaction hover:bg-greenaction hover:border-green">
            More...
          </button>
        </NavLink>

        <label className="flex cursor-pointer">
          <MdOutlinePendingActions className="h-6 w-6" />
          <input
            className="flex cursor-pointer"
            type="checkbox"
            checked={todo.state}
          />
        </label>
      </div>
    </div>
  );
};

export default Todo;
