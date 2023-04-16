import Pokemons from "../components/Pokemons";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

export default function Home({ pokemons }) {
  return (
    <div>
      <div className="flex justify-center w-full border-2 border-solid border-gray-250">
        <img
          className="border hover:cursor-pointer  shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]  pt-1 pb-1 pl-2 pr-2 "
          src="/pokemonLogo.png"
          alt="pokemon logo"
        />
        <img
          className="border hover:cursor-pointer  pt-1 pb-1 pl-2 pr-2 "
          src="/pikachu.png"
          alt="pikachu"
        />
        <img
          className="border hover:cursor-pointer  pt-1 pb-1 pl-2 pr-2 "
          src="/about.png"
          alt="About Us"
        />
        <img
          className="hover:cursor-pointer hidden lg:inline-block p-1 "
          src="/sv1.png"
          alt="scarlet"
        />
        <img
          className="hover:cursor-pointer hidden lg:inline-block p-1 "
          src="/sv2.jpg"
          alt="scarlet"
        />
        <img
          className="hover:cursor-pointer hidden lg:inline-block p-1 "
          src="/unite.jpg"
          alt="Unite"
        />
      </div>

      <div className="flex justify-center bg-white lg:bg-[#2F2F2F] min-h-screen">
        {/*Main Content container */}
        <div className="flex flex-col relative items-center w-5/6 bg-white">
          {/*center content container*/}
          <div className="absolute  top-28 left-0 flex flex-col z-10">
            {/*Login/search */}
            <div className="hidden lg:fixed lg:block">
              <div className="pr-1 pl-1 pt-8 pb-8 rounded-tr-lg text-xs font-bold bg-[#54B564] text-white">
                Log In
              </div>
              <div className="pr-1 pl-1 pt-4 pb-4 rounded-br-lg text-xs bg-[#616161] text-white">
                Search
              </div>
            </div>
          </div>
          {/*login/search end */}
          <div className="flex flex-col items-center  bg-white h-min">
            {/*Pokemon cards container */}
            <div className="absolute w-screen hidden lg:flex min-h-[5rem] top-0 bg-white"></div>

            <div className="justify-center hidden lg:flex w-full sticky top-0 bg-white">
              {/*second nav */}
              <div className=" border-b-[6px] rounded-l sticky border-[#919191]  pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Home
              </div>
              <div className=" border-b-[6px] border-[#E33508] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Pokedex
              </div>
              <div className=" border-b-[6px] border-[#EE6B2F] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Video Games & Apps
              </div>
              <div className=" border-b-[6px] border-[#E6BC2F] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Trading Card Game
              </div>
              <div className=" border-b-[6px] border-[#4DAD5B] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Pokemon TV
              </div>
              <div className=" border-b-[6px] border-[#30A7D7] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                Play! Pokemon Events
              </div>
              <div className=" border-b-[6px] rounded-r border-[#1B53BA] pl-2 pr-2 pt-5 pb-2 w-[7.5rem] text-gray-700 text-center">
                News
              </div>
            </div>
            <div className="self-start pt-5 pb-5 text-3xl text-[#919191]">
              Pokedex
            </div>

            <Pokemons pokemons={pokemons} currentPage={"1"} />
          </div>
        </div>
      </div>
    </div>
  );
}
// }

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query pokemons {
        pokemons(first: 60) {
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
  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}
