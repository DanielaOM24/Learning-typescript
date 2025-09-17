import { useState } from "react";

type values = number;

export default function Home() {
  const [result, setResult] = useState(0);

  const handClick = () => {
    const lasuma = sumar(10, 50);
    setResult(lasuma);
  };

  const sumar = (a: values, b: values): values => {
    return a + b;
  };

  return (
    <main className="main-container">
      <h1>HELLO! ✨</h1>
      <h2>Mi first page with next and Typescript 🤍</h2>
      <div>{result}</div>
      <button
        onClick={() => {
          handClick();
        }}
        className="bg-cyan-500 miButton"
      >
        Sumar y mostrar
      </button>
    </main>
  );
}
