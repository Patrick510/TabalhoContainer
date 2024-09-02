import {
  CardTitle,
  CardFooter,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { toast } from "sonner";
import { Produto } from "@/lib/types";

interface InputProdProps {
  onSave: (produto: Produto) => void;
}

export default function InputProd({ onSave }: Readonly<InputProdProps>) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState<string>("");
  const [cadastrado, setCadastrado] = useState(false);

  const formatValue = (value: string): string => {
    return value.replace(/^R\$ /, "").replace(/[^\d,]/g, "");
  };

  const handlePrecoChange = (value: string) => {
    setPreco(formatValue(value));
  };

  const addProduto = () => {
    const precoNumerico = parseFloat(preco.replace(",", "."));

    if (
      nome === "" ||
      descricao === "" ||
      preco === "" ||
      isNaN(precoNumerico) ||
      precoNumerico <= 0
    ) {
      toast("Por favor, preencha todos os campos corretamente", {
        description: "Sabado, Agosto 31, 2024 as 11:00 AM",
        action: {
          label: "Undo",
          onClick: () => setCadastrado(false),
        },
      });
    } else {
      const novoProduto = {
        nome,
        descricao,
        preco: precoNumerico,
      };
      // console.log(novoProduto);
      onSave(novoProduto);
      setCadastrado(true);
      setNome("");
      setDescricao("");
      setPreco("");
      toast("Produto Cadastrado!", {
        description: "Sabado, Agosto 31, 2024 as 11:00 AM",
        action: {
          label: "Ok",
          onClick: () => setCadastrado(false),
        },
      });
    }
  };

  return (
    <div className="w-full">
      <CardHeader className="text-center pb-3 pt-3">
        <CardTitle className="uppercase font-semibold text-xl">
          Cadastrar produto
        </CardTitle>
        <CardDescription className="text-lg">
          Preencha os dados de produto
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full pb-3">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="nameProduto">Nome:</Label>
            <Input
              id="name"
              value={nome}
              placeholder="Nome do produto:"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="descricaoProduto">Descrição</Label>
            <Textarea
              id="desc"
              value={descricao}
              placeholder="Descrição do produto"
              onChange={(e) => setDescricao(e.target.value)}
              className="resize-none"
            />
          </div>
          <div className="flex flex-row space-y-1.5 items-center gap-2">
            <Label htmlFor="precoProduto">Preço:</Label>
            <Input
              id="preco"
              placeholder="R$ 0,00"
              value={`R$ ${preco}`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePrecoChange(e.target.value)
              }
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 flex justify-center items-center">
        <Button type="button" onClick={() => addProduto()}>
          Cadastrar
        </Button>
      </CardFooter>
    </div>
  );
}
