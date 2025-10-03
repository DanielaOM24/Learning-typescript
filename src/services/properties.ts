import axios from 'axios';
//funcion que va a consumir la api

export const getProperties = async () =>{
    const response =await axios.get ('http://localhost:3000/api/properties')
   return response.data
    
}