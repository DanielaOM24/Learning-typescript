import React from "react";
import Image from "next/image";

interface Cardprops {
  color: "green" | "white" | "black";
  tittle: string;
  imageUrl: string;
  description: string;
}

export const Card = ({ color }: Cardprops) => {
  console.log(color);

  return (
    <div
      className={
        color === "green"
          ? "card-green"
          : color === "white"
          ? "card-white"
          : color === "black"
          ? "card-black"
          : ""
      }
    >
      <div className="card__leftSide"></div>
      <div className="card__leftSide--tittle">
        Search engine <br />
        optimizacion
      </div>
      <div className="card__leftSide link"></div>
      <div className="card__leftSide--icon"></div>
      <div className="card__leftSide--text"></div>

      <div className="card__rigthSide">
        <Image
          className="card__rigthSide__Image"
          src="imagen"
          alt="200"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
