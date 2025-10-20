import { Modal } from "@/components/card/modal";
import { MyContext } from "@/context/Context";
import { Button, Switch } from "@heroui/react";
import { useRouter } from "next/router";
import { useContext} from "react";

const Dashboard = () => {
    const router = useRouter();

    const { userLogged, setIsActive, isActive,setIsSelected,isSelected} = useContext(MyContext);


    console.log(userLogged)

    const handleClick = () => {
        console.log(userLogged)
        setIsActive(!isActive)
        router.back();
    };
    const handleClose = () =>{
        console.log("close");
    }
    const handleCancel = () =>{
        console.log("cancel");

    }
    const handleSave = () => {
        console.log("save");

    }
    return (
        <>
            <div>Este es el dashboard</div>
            <div>El ususario {userLogged.name} esta logueado</div>
            <div className="flex justify-center items-center mt-5">
            <Switch
                size="sm"
                color="success"
                isSelected={isSelected}
                onValueChange={setIsSelected}>Airplane mode

            </Switch>
            </div>
            <Button onPress={handleClick} className="mt-7" color="danger">
                regresar
            </Button>
            <Modal
            title="modal prueba"
            children ="tarjeta"
            onClose={handleClose}
            description="esta es mi prueba"
            onCancel={handleCancel}
            onSave={handleSave}
        >
            </Modal>
        </>

    );
};

export default Dashboard;
