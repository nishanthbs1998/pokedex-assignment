import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ApolloError } from "@apollo/client";

const Details = ({ twentyPokemons,currentData,name }) => {
 // const router = useRouter();
 console.log(twentyPokemons)
  console.log("name:",name)
 // const [name, setName] = useState(router.query.name);
  //const [pokemons, setPokemons] = useState(twentyPokemons);
  const [isEvo,setIsEvo]=useState(false)
  // const [detailPokemon, setDetailPokemon] = useState(currentData?.length?currentData?.filter(val=>val.name===name).map(val=>val.name):currentData?.name);
  //const [realTimePokemon,setRealTimePokemon]=useState()  

  // useEffect(() => {
  //   console.log("name:", typeof name.toString());
  // }, [name]);

//   useEffect(() => {
//     const client = new ApolloClient({
//       uri: "https://graphql-pokemon2.vercel.app/",
//       cache: new InMemoryCache(),
//     });

//     async function fetchData() {
//       const {data }= await client.query({
//         query: gql`
//         query pokemon{
//   pokemon(name: "${name}"){
//     id
//     number
//     name
//     weight{
//       minimum
//       maximum
//     }
//     height{
//       minimum
//       maximum
//     }
//     classification
//     types
//     resistant
//     weaknesses
//     fleeRate
//     maxCP
//     maxHP
//     image
//   }
// }
//         `,
//       });
//      // const res=await data.pokemon
//       setPokemons((prev)=>[...prev,data.pokemon]);
//       //console.log("fetched: ", realTimePokemon);
      
//     }
//     if(pokemons.filter(val=>val.name===name).length===0)
//       fetchData()
    
 
//   }, [name]);

 // useEffect(()=>setDetailPokemon(()=>pokemons?.filter(val=>val.name===name)),[pokemons])
  // useEffect(()=>{
  //   // let filteredPoke=pokemons.filter(pokemon=>pokemon.name===name)
  //   //   setDetailPokemon(filteredPoke[0])
      
  //    // setDetailPokemon(detailPokemon[0])
  //     // if(detailPokemon)
  //     //  { 
  //       setDetailPokemon(realTimePokemon)
  //       console.log("checking in if: ",realTimePokemon)
  //     // }
  //     console.log("Pokemons twenty: ",pokemons)
  // },[realTimePokemon])

console.log("currentData in detail",currentData)
  return (
    <div>
      {/* {detailPokemon} */}
      {currentData?.length?currentData?.filter(val=>val.name===name).map(val=>
        <div>
        <img src={val.image} alt="pokemon image" />
        <p>{val.name}</p>
        <p>Height:{val.height.maximum}</p>
        <p>Weight:{val.weight.maximum}</p>
        <p>{val.classification}</p>
        <p className="flex">type:
          {
            val.types.map(val=><p>{val}</p>)
          }
        </p>
          <p className="flex">Weakness:{val.weaknesses.map(val=><p>{val}</p>)}</p>
           <p className="flex">Resistant:{val.resistant.map(val=><p>{val}</p>)}</p>
           <button onClick={()=>setIsEvo(true)}>Evolutions</button>
           {
            isEvo&&<div onClick={()=>setIsEvo(false)}>
              Evolution data
            </div>
           }
        </div>
        ): <div>
        <img src={currentData?.image} alt="pokemon image" />
        <p>{currentData?.name}</p>
        <p>Height:{currentData?.height.maximum}</p>
        <p>Weight:{currentData?.weight.maximum}</p>
        <p>{currentData?.classification}</p>
        <p className="flex">type:
          {
            currentData?.types.map(val=><p>{val}</p>)
          }
        </p>
          <p className="flex">Weakness:{currentData?.weaknesses.map(val=><p>{val}</p>)}</p>
           <p className="flex">Resistant:{currentData?.resistant.map(val=><p>{val}</p>)}</p>
           <button onClick={()=>setIsEvo(true)}>Evolutions</button>
           {
            isEvo&&<div onClick={()=>setIsEvo(false)}>
              Evolution data
            </div>
           }
        </div>}
      {/* {currentData?.name} */}
      {/* {currentData?.filter(val=>val.name===name).map(val=>val.name)} */}
      {/* {detailPokemon.classification} */}
    </div>
  );
};

export default Details;
