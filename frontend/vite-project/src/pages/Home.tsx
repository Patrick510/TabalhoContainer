import { useState } from "react";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../../@/components/ui/card";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";
import { useFetchProd } from "../components/hooks/useFetchProd";
import { Textarea } from "../../@/components/ui/textarea";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
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

  // String nome; String descricao; double preco;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-[450px] h-[500px] flex flex-col items-center justify-center rounded-md bg-white shadow-md">
        <CardHeader className="text-center pb-3 pt-3">
          <CardTitle className="uppercase font-semibold text-xl">Cadastrar produto</CardTitle>
          <CardDescription className="text-lg">
            Preencha os dados de produto
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Nome do produto:" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea id="desc" placeholder="Descrição do produto"></Textarea>
            </div>
            <div className="flex flex-row space-y-1.5 items-center gap-2">
              <Label htmlFor="preco">Preço</Label>
              <Input id="preco" placeholder="Preço do produto" type="number"></Input>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
