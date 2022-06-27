import React, { useEffect } from "react";
import axios from "axios";
import Todo from "../components/Todo";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTodosData } from "../feature/todoSlice";

const Home = () => {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todos.todos);

  const getMainData = () => {
    axios
      .get(`${process.env.REACT_APP_PORT}/api/todos`)
      .then((res) => {
        dispatch(setTodosData(res.data));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMainData();
  }, []);

  return (
    <div className="m-2">
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold my-6">Todo list</h2>
        <NavLink to="/MB-Test-todolist-frontend/new">
          <button className="bg-green p-2 rounded-full border-2 border-greenaction hover:bg-greenaction hover:border-green">
            New task
          </button>
        </NavLink>
        <section className="w-full mt-6">
          {todosData?.length === 0 ? (
            <p className="text-center">You have no tasks currently</p>
          ) : (
            todosData?.map((todo) => <Todo key={todo.id} todo={todo} />)
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
