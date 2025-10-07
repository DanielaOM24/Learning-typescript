import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MyContext } from "@/context/Context";
import { notification } from "@/helpers/utils";
import { Button, Input, Switch, Card, CardBody } from "@heroui/react";

const userLogueado = {
    name: "daniela",
    role: "admin",
    isActive: true,
    date: "24/12/2025",
};

export default function Home() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const { setUserLogged, setIsActive, isActive,isSelected,setIsSelected } = useContext(MyContext);
    const router = useRouter();

    const handleClick = async () => {
        if (user === "daniela" && pass === "123456") {
            setUserLogged(userLogueado);
            notification("Login exitoso", "success");
            router.push("/dashboard");
        } else {
            notification("Usuario o contraseña incorrectos", "error");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <Card className="w-[380px] shadow-lg p-6">
                <CardBody>
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>

                    <div className="space-y-4">
                        <Input
                            label="User"
                            placeholder="Enter your user"
                            type="text"
                            onChange={(e) => setUser(e.target.value)}
                        />

                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(e) => setPass(e.target.value)}
                        />

                        <Button
                            onPress={handleClick}
                            color="primary"
                            className="w-full mt-3"
                        >
                            Login
                        </Button>

                        <div className="flex justify-center items-center mt-5">
                            <Switch
                                size="sm"
                                color="success"
                                isSelected={isSelected}
                                onValueChange={setIsSelected}>
                            </Switch>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
