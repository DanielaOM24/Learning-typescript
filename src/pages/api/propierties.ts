// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Properties from "@/database/models/propierties";
import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};
interface Property {
    _id: string;
    name: string;
    value: number;
    img?: string;
  }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>) {
try { 
    if (req.method === 'GET'){
        dbConnection()
        const data= await Properties.find()
        console.log(data);
    
    res.status(200).json({ ok: true, data: data as Property[]});
    }
    

    else if (req.method === 'POST'){ 
    console.log('codigo del  post');
    res.status(200).json({ name: "funciona el post" });
    }
    else if (req.method === 'PUT'){ 
            console.log('codigo del put ');
        res.status(200).json({ name: "funciona el put " });
    }
    else if (req.method === 'DELETE'){ 
        console.log('codigo del delete ');
    res.status(200).json({ name: "funciona el delete " });
    }
    else{
        res.status(500).json({name: "el metodo no está permitido"})
    }
} catch (err){
    res.status(500).json({name:'fallo',error: err})
}
}