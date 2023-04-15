import { useEffect, useState } from "react";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { offsetLimitPagination } from "@apollo/client/utilities";

const Pokemons = ({ pokemons, currentPage }) => {
  const router = useRouter();
  const [currentData, setCurrentData] = useState(pokemons);
  //const [currentPage,setCurrentPage]=useState(router.query.id)
  const [pageVal, setPageVal] = useState(1);
  const [offSet, setOffset] = useState(0);
  const [paginatedData, setPaginatedData] = useState(
    currentData?.slice(offSet, offSet + 20)
  );

  useEffect(() => {
    setOffset(() => (parseInt(currentPage) - 1) * 20);
    setPaginatedData(currentData?.slice(offSet, offSet + 20));
    scrollTo(0, 0);
    console.log("currentdataa:", currentData);
  }, [currentData]);

  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://graphql-pokemon2.vercel.app/",
      cache: new InMemoryCache(),
    });

    async function fetchData() {
      const { data } = await client.query({
        query: gql`
      query pokemons {
        pokemons(first: ${(parseInt(currentPage) - 1) * 20 + 20}) {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
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
    `,
      });
      console.log("fetched: ", data.pokemons);
      //return data.pokemons
      setCurrentData(data.pokemons);
      console.log("Useeffect running", currentPage);
      // console.log("data:", currentData);
    }
    fetchData();
    //const val=fetchData()
    //if(currentPage==='4')
  }, [currentPage]);

  const handleNext = () => {
    setOffset(offSet + 20);
    setPaginatedData(pokemons.slice(offSet, offSet + 20));
    scrollTo(0, 0);
  };
  // useEffect(() => {
  //   setPaginatedData(pokemons.slice(offSet, offSet + 20));
  //   scrollTo(0, 0);
  //   console.log("Offset value: ", offSet);

  // }, [offSet]);

  useEffect(() => {
    console.log("Paginated: ", paginatedData);
  }, [paginatedData]);
  const handlePrev = () => {
    setOffset(offSet - 20);
    setPaginatedData(currentData.slice(offSet - 20, offSet));
    scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col justify-center">
    <div className="flex gap-5 mb-5 justify-center">
        {/* <button className="bg-purple-500 rounded py-1 px-2 text-white">
                
          <Link href={`/${parseInt(currentPage) - 1}`}
          onClick={handlePrev}
          >{"<"}</Link>
        </button> */}
        {Array.from({ length: 8 }, (_, index) => index + 1).map((val) => (
          <button
            onClick={() => {
              setOffset(() => (val - 1) * 20);
              // handleNext()
              setPageVal(() => parseInt(val));
            }}
            className="bg-purple-500 rounded py-1 px-2 text-white"
          >
            <Link href={`/${parseInt(val)}`}>{val}</Link>
          </button>
        ))}

        {/* <button
          className="bg-purple-500 rounded py-1 px-2 text-white"
          onClick={handleNext}
        >
          <Link href={`/${parseInt(currentPage) + 1}`}>{">"}</Link>
        </button> */}
      </div>
    <div className="flex flex-wrap gap-5 justify-center  max-w-3xl">
      {paginatedData?.map(({ id, name, image, number, types }) => (
        <Link href={`/detail/${name}`}>
        <div
          key={id}
          className="  hover:cursor-pointer flex flex-col m-2 justify-center items-center max-w-56 max-h-56 p-1"
        >
          <img
            className="w-36 h-36 object-scale-down "
            src={image}
            alt="pokemon image"
          />
          <p className="text-xs text-slate-500 font-semibold self-start">
            #{number}
          </p>
          <p className="text-xl font-semibold self-start">{name}</p>
          <div className="flex self-start text-xs gap-1 mt-1">
            {types.map((type) => (
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
                    ? "bg-[#9BCC50] rounded-md px-2 text-white py-1"
                    : type === "Electric"
                    ? "bg-[#EED535] rounded-md px-2 text-white py-1"
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
        </Link>
      ))}
      <div className="flex gap-5 mb-5">
        {/* <button className="bg-purple-500 rounded py-1 px-2 text-white">
                
          <Link href={`/${parseInt(currentPage) - 1}`}
          onClick={handlePrev}
          >{"<"}</Link>
        </button> */}
        {Array.from({ length: 8 }, (_, index) => index + 1).map((val) => (
          <button
            onClick={() => {
              setOffset(() => (val - 1) * 20);
              // handleNext()
              setPageVal(() => parseInt(val));
            }}
            className="bg-purple-500 rounded py-1 px-2 text-white"
          >
            <Link href={`/${parseInt(val)}`}>{val}</Link>
          </button>
        ))}

        {/* <button
          className="bg-purple-500 rounded py-1 px-2 text-white"
          onClick={handleNext}
        >
          <Link href={`/${parseInt(currentPage) + 1}`}>{">"}</Link>
        </button> */}
      </div>
    </div>
  </div>);
};

export default Pokemons;
