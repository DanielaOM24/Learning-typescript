
interface MiButtonProps {
  text: string;
  icon: string;
}

export const MiButton = ({ text, icon }: MiButtonProps) => {

    const handleClick = () =>{
        console.log("se hizo click en el botón");   
    };


  return (
    <button onClick={handleClick} className="components--button">
      <div> {text}</div>
      <div> {icon}</div>
    </button>
  );
};
