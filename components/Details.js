import React from "react";
import { useState } from "react";

import Evolutions from "./Evolutions";

const Details = ({ currentData, name }) => {
  const [isEvo, setIsEvo] = useState(false);

  return (
    <div className="mt-16 max-w-3xl">
      {currentData?.length ? (
        currentData
          ?.filter((val) => val.name === name)
          .map((val) => (
            <div className="flex flex-col items-center gap-10">
              <div className="mb-10">
                <p className="text-[2.5rem]">{val.name}</p>
              </div>

              <div className="flex flex-col items-center lg:flex-row gap-16">
                <div className="w-full lg:w-[50%] flex flex-col items-center gap-10">
                  <img src={val.image} alt="pokemon image" />

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xl font-semibold">Resistance</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {val.resistant.map((val) => (
                        <p
                          className={
                            // "py-1 px-2
                            val === "Poison"
                              ? "bg-[#B97FC9]  rounded-md px-10 text-white py-1"
                              : val === "Bug"
                              ? "bg-[#729F3F] rounded-md px-10 text-white py-1"
                              : val === "Water"
                              ? "bg-[#4592C4] rounded-md px-10 text-white py-1"
                              : val === "Fire"
                              ? "bg-[#FD7D24] rounded-md px-10 text-white py-1"
                              : val === "Grass"
                              ? "bg-[#9BCC50] rounded-md px-10  py-1"
                              : val === "Electric"
                              ? "bg-[#EED535] rounded-md px-10  py-1"
                              : val === "fairy"
                              ? "bg-[#FDB9E9] rounded-md px-10 text-white py-1"
                              : val === "Normal"
                              ? "bg-[#A4ACAF] rounded-md px-10 text-white py-1"
                              : "bg-red-500 rounded-md px-10 text-white py-1"
                          }
                        >
                          {val}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="bg-[#30A7D7]  flex gap-20 py-5 px-10 rounded-lg">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-1">
                        <p className="text-white text-base font-semibold">
                          Height
                        </p>
                        <p className="text-lg">Max: {val.height.maximum}</p>
                        <p className="text-lg">Min: {val.height.minimum}</p>
                      </div>
                      <div>
                        <p className="text-white text-base font-semibold">
                          Weight
                        </p>
                        <p className="text-lg">Max: {val.weight.maximum}</p>
                        <p className="text-lg">Min: {val.weight.minimum}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <p className="text-white text-base font-semibold">
                        Category
                      </p>
                      <p className="text-lg">{val.classification}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xl font-semibold">Type</p>
                      <p className="flex gap-2"></p>
                    </div>
                    <div className="flex gap-2">
                      {val.types.map((val) => (
                        <p
                          className={
                            // "py-1 px-2
                            val === "Poison"
                              ? "bg-[#B97FC9] rounded-md px-10 text-white py-1"
                              : val === "Bug"
                              ? "bg-[#729F3F] rounded-md px-10 text-white py-1"
                              : val === "Water"
                              ? "bg-[#4592C4] rounded-md px-10 text-white py-1"
                              : val === "Fire"
                              ? "bg-[#FD7D24] rounded-md px-10 text-white py-1"
                              : val === "Grass"
                              ? "bg-[#9BCC50] rounded-md px-10  py-1"
                              : val === "Electric"
                              ? "bg-[#EED535] rounded-md px-10 text-white py-1"
                              : val === "fairy"
                              ? "bg-[#FDB9E9] rounded-md px-10 text-white py-1"
                              : val === "Normal"
                              ? "bg-[#A4ACAF] rounded-md px-10 text-white py-1"
                              : "bg-red-500 rounded-md px-10 text-white py-1"
                          }
                        >
                          {val}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-xl font-semibold">Weakness</p>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {val.weaknesses.map((val) => (
                          <p
                            className={
                              // "py-1 px-2
                              val === "Poison"
                                ? "bg-[#B97FC9]  rounded-md px-10 text-white py-1"
                                : val === "Bug"
                                ? "bg-[#729F3F] rounded-md px-10 text-white py-1"
                                : val === "Water"
                                ? "bg-[#4592C4] rounded-md px-10 text-white py-1"
                                : val === "Fire"
                                ? "bg-[#FD7D24] rounded-md px-10 text-white py-1"
                                : val === "Grass"
                                ? "bg-[#9BCC50] rounded-md px-10  py-1"
                                : val === "Electric"
                                ? "bg-[#EED535] rounded-md px-10  py-1"
                                : val === "fairy"
                                ? "bg-[#FDB9E9] rounded-md px-10 text-white py-1"
                                : val === "Normal"
                                ? "bg-[#A4ACAF] rounded-md px-10 text-white py-1"
                                : "bg-red-500 rounded-md px-10 text-white py-1"
                            }
                          >
                            {val}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <button
                  className="text-xl font-semibold bg-orange-500 rounded-md py-1 px-5 text-white"
                  onClick={() => {
                    setIsEvo(!isEvo);
                    scrollTo(0, document.body.scrollHeight);
                  }}
                >
                  {isEvo ? "Close" : "See Evolutions"}
                </button>
                {isEvo && <Evolutions setIsEvo={setIsEvo} name={val.name} />}
              </div>
            </div>
          ))
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div className="mb-10">
            <p className="text-[2.5rem]">{currentData?.name}</p>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-16">
            <div className="w-full lg:w-[50%] flex flex-col items-center gap-10">
              <img src={currentData?.image} alt="pokemon image" />

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-semibold">Resistance</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentData?.resistant.map((val) => (
                    <p
                      className={
                        // "py-1 px-2
                        val === "Poison"
                          ? "bg-[#B97FC9]  rounded-md px-10 text-white py-1"
                          : val === "Bug"
                          ? "bg-[#729F3F] rounded-md px-10 text-white py-1"
                          : val === "Water"
                          ? "bg-[#4592C4] rounded-md px-10 text-white py-1"
                          : val === "Fire"
                          ? "bg-[#FD7D24] rounded-md px-10 text-white py-1"
                          : val === "Grass"
                          ? "bg-[#9BCC50] rounded-md px-10  py-1"
                          : val === "Electric"
                          ? "bg-[#EED535] rounded-md px-10  py-1"
                          : val === "fairy"
                          ? "bg-[#FDB9E9] rounded-md px-10 text-white py-1"
                          : val === "Normal"
                          ? "bg-[#A4ACAF] rounded-md px-10 text-white py-1"
                          : "bg-red-500 rounded-md px-10 text-white py-1"
                      }
                    >
                      {val}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-[#30A7D7]  flex gap-20 py-5 px-10 rounded-lg">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-semibold">Height</p>
                    <p className="text-lg">
                      Max: {currentData?.height.maximum}
                    </p>
                    <p className="text-lg">
                      Min: {currentData?.height.minimum}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-base font-semibold">Weight</p>
                    <p className="text-lg">
                      Max: {currentData?.weight.maximum}
                    </p>
                    <p className="text-lg">
                      Min: {currentData?.weight.minimum}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-white text-base font-semibold">Category</p>
                  <p className="text-lg">{currentData?.classification}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-semibold">Type</p>
                  <p className="flex gap-2"></p>
                </div>
                <div className="flex gap-2">
                  {currentData?.types.map((val) => (
                    <p
                      className={
                        // "py-1 px-2
                        val === "Poison"
                          ? "bg-[#B97FC9] rounded-md px-10 text-white py-1"
                          : val === "Bug"
                          ? "bg-[#729F3F] rounded-md px-10 text-white py-1"
                          : val === "Water"
                          ? "bg-[#4592C4] rounded-md px-10 text-white py-1"
                          : val === "Fire"
                          ? "bg-[#FD7D24] rounded-md px-10 text-white py-1"
                          : val === "Grass"
                          ? "bg-[#9BCC50] rounded-md px-10  py-1"
                          : val === "Electric"
                          ? "bg-[#EED535] rounded-md px-10 text-white py-1"
                          : val === "fairy"
                          ? "bg-[#FDB9E9] rounded-md px-10 text-white py-1"
                          : val === "Normal"
                          ? "bg-[#A4ACAF] rounded-md px-10 text-white py-1"
                          : "bg-red-500 rounded-md px-10 text-white py-1"
                      }
                    >
                      {val}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xl font-semibold">Weakness</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {currentData?.weaknesses.map((val) => (
                      <p
                        className={
                          // "py-1 px-2
                          val === "Poison"
                            ? "bg-[#B97FC9]  rounded-md px-10 text-white py-1"
                            : val === "Bug"
                            ? "bg-[#729F3F] rounded-md px-10 text-white py-1"
                            : val === "Water"
                            ? "bg-[#4592C4] rounded-md px-10 text-white py-1"
                            : val === "Fire"
                            ? "bg-[#FD7D24] rounded-md px-10 text-white py-1"
                            : val === "Grass"
                            ? "bg-[#9BCC50] rounded-md px-10  py-1"
                            : val === "Electric"
                            ? "bg-[#EED535] rounded-md px-10  py-1"
                            : val === "fairy"
                            ? "bg-[#FDB9E9] rounded-md px-10 text-white py-1"
                            : val === "Normal"
                            ? "bg-[#A4ACAF] rounded-md px-10 text-white py-1"
                            : "bg-red-500 rounded-md px-10 text-white py-1"
                        }
                      >
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <button
              className="text-xl font-semibold bg-orange-500 rounded-md py-1 px-5 text-white"
              onClick={() => {
                setIsEvo(!isEvo);
                scrollTo(0, document.body.scrollHeight);
              }}
            >
              {isEvo ? "Close" : "See Evolutions"}
            </button>
            {isEvo && (
              <Evolutions setIsEvo={setIsEvo} name={currentData?.name} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
