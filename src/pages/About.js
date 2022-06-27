import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="m-2">
      <header>
        <Header />
        <Navigation />
      </header>
      <div className="flex flex-col items-center md:mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6">
        <h2 className="text-xl font-bold my-6">About</h2>

        <p className="shadow-md bg-grey p-2 rounded-xl mb-6">
          This todo list has been created to make your life easier. Whether it
          is for personal, professional or school purposes, WAPP will fit your
          needs. So you can organize yourself on a daily basis and complete your
          list as you go along. <br />
          Remember: a to-do list does not need to be completed during the day,
          the most important thing is regularity! This is the key to your
          success.
        </p>

        <p className="shadow-md bg-grey p-2 rounded-xl">
          To make it easy for you to navigate, WAPP is also easily accessible on
          tablet and phone. So you can access it any time of the day and
          anywhere. Your goals will always be within reach!
        </p>
      </div>
    </div>
  );
};

export default About;
