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

export default function InputProd() {
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
        <CardContent className="w-full">
            <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nameProduto">Nome:</Label>
                <Input id="name" placeholder="Nome do produto:" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="descricaoProduto">Descrição</Label>
                <Textarea id="desc" placeholder="Descrição do produto"></Textarea>
            </div>
            <div className="flex flex-row space-y-1.5 items-center gap-2">
                <Label htmlFor="precoProduto">Preço:</Label>
                <Input
                id="preco"
                placeholder="Preço do produto"
                type="number"
                ></Input>
            </div>
            </div>
        </CardContent>
        <CardFooter className="p-2 flex justify-center items-center">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>Cadasrar</Button>
        </CardFooter>
        </div>
    );
}
