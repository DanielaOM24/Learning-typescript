import { useEffect, useState } from "react";
import NextApiResponse from 'next';
import { getProperties } from '../../services/properties';
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

interface propertyProps{
  _id:string
  name: string,
  value:number,
  img:string
}

interface dataProperties {
  ok: string,
  miInfo : propertyProps[]
}

export default function Home() {
  const [dataProperties, setDataProperties] = useState({} as dataProperties);
  

  const handleClick = async() => {
    const response = await(getProperties());
    setDataProperties(response);
  };
  useEffect(()=>{
    handleClick()
    const fechData=async() => {
      const response = await getProperties();
      setDataProperties(response);
    };
    fechData()

  })


  };

  return (
    <main className="main-container">
      <h1>HELLO! ✨</h1>
      <h2>List of properties 🤍</h2>
      <div>{result}</div>
      <button
        onClick={() => {
          handClick();
        }}
        className="bg-cyan-500 miButton"
      >
        
      </button>
    </main>
  );

