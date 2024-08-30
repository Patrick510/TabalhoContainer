import { useState } from "react";
import { Button } from "../components/ui/button";
import { useFetchProd } from "../components/hooks/useFetchProd";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [contador, setContador] = useState(0);

  const {
    data: [],
  } = useFetchProd();

  function incrementar() {
    setContador(contador + 1);
    const p = document.createElement("p");
    p.innerHTML = `Contador: ${contador}`;
    document.querySelector(".criap")?.appendChild(p);
  }

  return (
    <div className="bg-black">
      <p>deu bom</p>
      <Button variant={"outline"} onClick={() => incrementar()}>
        ADICIONAR CONTADOR
      </Button>
      <div className="criap bg-slate-600"></div>

      <div>
        {data?.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
