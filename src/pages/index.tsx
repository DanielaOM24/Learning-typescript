import { useRouter } from "next/router";
import { useState } from "react";
import { users } from "../utils/users";

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
        console.log("Se hizo click con:", user, password);

        // Buscar si las credenciales están en USERS
        const foundUser = users.find(
            (u) => u.name === user && u.password === password
        );

        if (foundUser) {
            console.log("Login exitoso:", foundUser.name);
            router.push("/"); // va al index.tsx
        } else {
            console.log("Credenciales incorrectas");
            alert("Usuario o contraseña inválidos");
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

                <button onClick={handleClick}>Ingresar</button>
            </div>
        </div>
    );
};

export default Login;