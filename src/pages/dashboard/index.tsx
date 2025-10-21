import { Modal } from "@/components/modal/modal";
import { MyContext } from "@/context/Context";
import { Button, Switch } from "@heroui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const Dashboard = () => {
    const router = useRouter();

    const { userLogged, setIsActive, isActive, setIsSelected, isSelected } = useContext(MyContext);

    console.log(userLogged)

    const handleClick = () => {
        console.log(userLogged)
        setIsActive(!isActive)
        router.back();
    };

    const [modalIsOpen, setmodalIsOpen] = useState(false);

    const handleClose = () => {
        console.log("close");
        setmodalIsOpen(false)
    }
    const handleCancel = () => {
        console.log("cancel");

    }
    const handleSave = () => {
        console.log("save");

    }
    return (
        <>
            <div className="container-dashboard">Este es el dashboard</div>
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
            <Button onPress={() => setmodalIsOpen(true)} className="mt-7" color="danger">
                abrir modal
            </Button>
            <Modal
                title="modal prueba"
                children="tarjeta"
                onClose={handleClose}
                description="esta es mi prueba"
                onCancel={handleCancel}
                onSave={handleSave}
                isOpen={modalIsOpen}
            >
            </Modal>
        </>

    );
};

export default Dashboard;
