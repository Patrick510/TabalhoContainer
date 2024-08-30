import { useState } from "react";
import { Button } from "../components/ui/button";
import { useFetchProd } from "../components/hooks/useFetchProd";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

export default function Home() {
  const [produtos, setProdutos] = useState([] as Produto[]);
  const [contador, setContador] = useState(0);

  const { data } = useFetchProd();

  if (data && produtos.length === 0) {
    setProdutos(data);
  }

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
        {produtos.map((produto) => (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
