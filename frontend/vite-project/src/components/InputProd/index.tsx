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
import { useState } from "react";

export default function InputProd() {

    const [produto, setProduto] = useState({
        nome: "",
        descricao: "",
        preco: 0,
    });

    console.log(produto)

    const [nome, setNome]= useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")
    const [erro, setErro] = useState("")

    const addProduto = () =>{
        if (nome === "" || descricao === "" || preco === "" || parseFloat(preco) <= 0) {
            setErro("Por favor, preencha todos os campos corretamente")
            return
        } else {
            setProduto({nome, descricao, preco:parseFloat(preco) || 0})
            setNome("")
            setDescricao("")
            setPreco("")
        }
    }
    
    return (
        <div className="w-full">
        {erro && (
            <div className="p-4 mb-4 text-red-700 bg-red-100 rounded">
                {erro}
            </div>
        )}
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
                <Input id="name" placeholder="Nome do produto:" onChange={(e)=> setNome(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="descricaoProduto">Descrição</Label>
                <Textarea id="desc" placeholder="Descrição do produto" onChange={(e) => setDescricao(e.target.value)}></Textarea>
            </div>
            <div className="flex flex-row space-y-1.5 items-center gap-2">
                <Label htmlFor="precoProduto">Preço:</Label>
                <Input
                id="preco"
                placeholder="Preço do produto"
                type="number"
                onChange={(e)=> setPreco(e.target.value)}
                ></Input>
            </div>
            </div>
        </CardContent>
        <CardFooter className="p-2 flex justify-center items-center">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button onClick={() => addProduto()}>Cadasrar</Button>
        </CardFooter>
        </div>
    );
}
