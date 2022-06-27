import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const New = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [errorTitle, setErrorTitle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      if (title.length > 35) {
        setErrorTitle(true);
      } else {
        const data = {
          title,
          description,
        };

        axios
          .post(`${process.env.REACT_APP_PORT}/api/todos`, data)
          .then(() => {
            resetTodo();
            navigate("/MB-Test-todolist-frontend/");
            setErrorTitle(false);
          })
          .catch((error) => console.log(error));
      }
    } else {
      alert("Please add a title");
    }
  };

  const resetTodo = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div className="m-2">
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold my-6">New task creation</h2>

        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div className="shadow-md bg-grey p-2 rounded-xl mb-6 flex flex-col md:mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6">
            <label className="font-bold" htmlFor="title">
              Title
            </label>
            <input
              style={{
                border: errorTitle ? "2px solid #c40b0b" : "2px solid #9AE17B",
              }}
              className="my-2 rounded-md p-1 border-2 border-green hover:border-greenaction focus:outline-greenaction"
              type="text"
              placeholder="Type your task name"
              id="title"
              required
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <span className="font-bold mb-4 text-red">
              {errorTitle && "The title must not exceed 35 characters"}
            </span>

            <label className="font-bold" htmlFor="description">
              Description
            </label>

            <textarea
              className="my-2 rounded-md p-1 h-28 border-2 border-green hover:border-greenaction focus:outline-greenaction"
              id="description"
              placeholder="Optional: detail your task"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <NavLink to="/MB-Test-todolist-frontend/">
              <button className="bg-green p-2 rounded-full w-16 mr-4 border-2 border-greenaction hover:bg-greenaction hover:border-green">
                Back
              </button>
            </NavLink>

            <input
              className="cursor-pointer bg-green p-2 rounded-full w-16 mr-4  border-2 border-greenaction hover:bg-greenaction hover:border-green"
              type="submit"
              value="Create"
            />

            {title || description ? (
              <button
                className="bg-green p-2 rounded-full w-16 border-2 border-greenaction hover:bg-greenaction hover:border-green"
                onClick={resetTodo}
              >
                Reset
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
