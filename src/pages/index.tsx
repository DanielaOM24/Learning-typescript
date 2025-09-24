import { useRouter } from "next/router";
import { useState } from "react";
import { users } from "../utils/users";
import { ToastContainer, toast } from 'react-toastify';
import { MiButton } from "@/components/button/Button";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();


    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
        };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleClick = () => {

        toast.error('🦄!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        console.log("Se hizo click con:", user, password);

        // Buscar si las credenciales están en USERS
        const foundUser = users.find(
            (u) => u.name === user && u.password === password
        );

        if (foundUser) {
            console.log("Login exitoso:", foundUser.name);
            router.push("/dashboard"); // va al index.tsx
        } else {
            console.log("Credenciales incorrectas");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Mi app</h1>
                <h3>Ingresa usuario y contraseña</h3>

                <label>Usuario</label>
                <input value={user} onChange={handleChangeUser} type="text" />

                <label>Contraseña</label>
                <input value={password} onChange={handleChangePassword} type="password" />

                <button className="login-box__buton" onClick={handleClick}>Ingresar</button>
                <MiButton text= {"guardar"} icon={"S"} />
                < ToastContainer/>
                
            </div>
        </div>
    );
};


export default Login;


//genericos

const arrayNum = [2,5,9,8,7,4];
const arrayStr = ["B","c","5","p"];
const arrayBln =[true, false];

//devuleva el 1 elemento de un array
const returnFirstElement = <T,> (array:T[]):T =>{
    return array[0];
}
const result = returnFirstElement<number>(arrayNum);
console.log(result);

//devuelva el ultimo elemento de un array
const returnLastElement = <T,> (array:T[]):T =>{
    return array[array.length-1];    
}
const result2 =returnLastElement <string>(arrayStr)
console.log(result2);

//devuelva un array completo inverso 
const returnReverseArray = <T,>(array:T[]):T[]=> {
    return (array).reverse ();
}

const result3 = returnReverseArray <boolean>(arrayBln)
console.log(result3);

//


const wrapInTripleArray = <T,>(value:T):T[]=>{
    return [value,value,value];
}
console.log(wrapInTripleArray<number>(5));





    
