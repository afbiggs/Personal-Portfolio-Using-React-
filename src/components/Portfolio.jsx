import React from "react";
import passwordGenerator from "../assets/passwordGenerator.jpg";
import workdayScheduler from "../assets/workdayScheduler.jpeg";
import mealsandTotties from "../assets/mealsandTotties.jpeg";
import readmeGenerator from "../assets/readmeGenerator.jpg";
import mysqlemployeeTracker from "../assets/mysqlemployeeTracker.jpeg";
import booksearchDatabase from "../assets/booksearchDatabase.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: passwordGenerator ,
    },
    {
      id: 2,
      src: workdayScheduler, 
    },
    {
      id: 3,
      src: mealsandTotties,
    },
    {
      id: 4,
      src: readmeGenerator,
    },
    {
      id: 5,
      src: mysqlemployeeTracker,
    },
    {
      id: 6,
      src: booksearchDatabase,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={1} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;