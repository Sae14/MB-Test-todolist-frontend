import React, { useEffect, useState } from "react";
import axios from "axios";
import { dateFormater } from "../components/Utils";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Details = () => {
  const { id } = useParams();
  const [todoData, setTodoData] = useState([]);
  const navigate = useNavigate();

  const getDetailData = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/api/todos/${id}`)
      .then((res) => {
        setTodoData(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDetailData();
  }, []);

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_PORT}/api/todos/${id}`).then(() => {
      navigate("/MB-Test-todolist-frontend/");
    });
  };

  return (
    <div className="m-2">
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold my-6">Task details</h2>

        <div className="shadow-md bg-grey rounded-xl p-2 w-full md:mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6">
          <h3 className="font-bold">Title</h3>
          <p>{todoData.title}</p>

          <div className="mt-4">
            <h3 className="font-bold">Description</h3>
            {todoData.description ? (
              <p>{todoData.description}</p>
            ) : (
              <p>This task hasn't any description</p>
            )}
          </div>
          <p className="italic text-sm mt-4">
            Created {dateFormater(todoData.createdAt)}
          </p>
        </div>
        <div className="mt-4">
          <NavLink to="/MB-Test-todolist-frontend/">
            <button className="bg-green p-2 rounded-full mr-4 w-16 border-2 border-greenaction hover:bg-greenaction hover:border-green">
              Back
            </button>
          </NavLink>

          <button
            className="bg-green p-2 rounded-full w-16 border-2 border-greenaction hover:bg-greenaction hover:border-green"
            onClick={() => {
              if (window.confirm("Do you really want to delete your task ?")) {
                handleDelete();
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
