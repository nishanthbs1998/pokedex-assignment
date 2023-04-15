import React, { useEffect,useState } from 'react'
import { ApolloClient,gql,InMemoryCache } from '@apollo/client';
import { useQuery } from '@apollo/client';

const GET_EVO=gql`
query pokemon ($name:String!){
  pokemon(name: $name){
    id
    name
    image
    number
    evolutions{
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
`


const Evolutions = ({setIsEvo,name}) => {
  const {data}=useQuery(GET_EVO,{
    variables:{
      name
    }
  })
  console.log(data)
  return (
    
    <div className=' flex rounded-md px-5 py-2 w-full items-center justify-center gap-10 mt-2 bg-[#616161]' onClick={()=>setIsEvo(false)}>
      <div className='flex flex-col items-center p-3'>
         <img className='h-44 w-44 rounded-full bg-inherit' src={data?.pokemon?.image} alt="stage 1" />
         <div className='flex flex-col items-center'>
          <p className='text-white text-xl font-medium'>{data?.pokemon?.name}</p>
          <p className='text-[#A4AC9E] font-medium'>#{data?.pokemon?.number}</p>
         </div>
         

      </div>
     
      <div className='flex gap-10 h-52  items-center justify-center '>
        {
      data?.pokemon?.evolutions?.map(evo=>(
      <div className='flex flex-col items-center p-3' >
        <img className='rounded-full w-44 h-44' src={evo.image} alt="consecutive evos" />
        <div className='flex flex-col items-center'>
          <p className='text-white text-xl font-medium'>{evo?.name}</p>
          <p className='text-[#A4AC9E] font-medium'>#{evo.number}</p>
        </div>
        
      </div>))
    }
      </div>
    
      
      
    </div>
  )
}

export default Evolutions
