import React, { useEffect, useState } from "react";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_EVO = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      number
      types
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  }
`;

const Evolutions = ({ setIsEvo, name }) => {
  const { data } = useQuery(GET_EVO, {
    variables: {
      name,
    },
  });
  console.log(data);
  return (
    <div
      className=" flex lg:flex-row flex-col rounded-md px-5 py-2 w-full items-center justify-center gap-5 mt-2 bg-[#616161]"
      onClick={() => setIsEvo(false)}
    >
      <div className="flex flex-col items-center p-3">
        <img
          className="h-28 w-28  lg:h-44 lg:w-44 rounded-full bg-inherit"
          src={data?.pokemon?.image}
          alt="stage 1"
        />
        <div className="flex flex-col items-center">
          <p className="text-white text-xl font-medium">
            {data?.pokemon?.name}
          </p>
          <p className="text-[#A4AC9E] font-medium">#{data?.pokemon?.number}</p>
          <div className="flex gap-2">
            {data?.pokemon?.types?.map((type) => (
              <p
                className={
                  type === "Poison"
                    ? "bg-[#B97FC9] rounded-md px-2 text-white py-1"
                    : type === "Bug"
                    ? "bg-[#729F3F] rounded-md px-2 text-white py-1"
                    : type === "Water"
                    ? "bg-[#4592C4] rounded-md px-2 text-white py-1"
                    : type === "Fire"
                    ? "bg-[#FD7D24] rounded-md px-2 text-white py-1"
                    : type === "Grass"
                    ? "bg-[#9BCC50] rounded-md px-2  py-1"
                    : type === "Electric"
                    ? "bg-[#EED535] rounded-md px-2  py-1"
                    : type === "fairy"
                    ? "bg-[#FDB9E9] rounded-md px-2 text-white py-1"
                    : type === "Normal"
                    ? "bg-[#A4ACAF] rounded-md px-2 text-white py-1"
                    : "bg-red-500 rounded-md px-2 text-white py-1"
                }
              >
                {type}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-5   items-center justify-center ">
        {data?.pokemon?.evolutions?.map((evo) => (
          <div className="flex flex-col items-center  p-3">
            <img
              className="rounded-full h-28 w-28  lg:h-44 lg:w-44"
              src={evo.image}
              alt="consecutive evos"
            />
            <div className="flex flex-col items-center">
              <p className="text-white text-xl font-medium">{evo?.name}</p>
              <p className="text-[#A4AC9E] font-medium">#{evo.number}</p>
              <div className="flex gap-2">
                {evo?.types?.map((type) => (
                  <p
                    className={
                      type === "Poison"
                        ? "bg-[#B97FC9] rounded-md px-2 text-white py-1"
                        : type === "Bug"
                        ? "bg-[#729F3F] rounded-md px-2 text-white py-1"
                        : type === "Water"
                        ? "bg-[#4592C4] rounded-md px-2 text-white py-1"
                        : type === "Fire"
                        ? "bg-[#FD7D24] rounded-md px-2 text-white py-1"
                        : type === "Grass"
                        ? "bg-[#9BCC50] rounded-md px-2  py-1"
                        : type === "Electric"
                        ? "bg-[#EED535] rounded-md px-2  py-1"
                        : type === "fairy"
                        ? "bg-[#FDB9E9] rounded-md px-2 text-white py-1"
                        : type === "Normal"
                        ? "bg-[#A4ACAF] rounded-md px-2 text-white py-1"
                        : "bg-red-500 rounded-md px-2 text-white py-1"
                    }
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evolutions;
