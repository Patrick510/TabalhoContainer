import {
  Card,
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

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[450px] h-[500px] flex flex-col items-center justify-center rounded-md bg-white shadow-md">
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
              <Label htmlFor="name">Nome:</Label>
              <Input id="name" placeholder="Nome do produto:" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea id="desc" placeholder="Descrição do produto"></Textarea>
            </div>
            <div className="flex flex-row space-y-1.5 items-center gap-2">
              <Label htmlFor="preco">Preço:</Label>
              <Input
                id="preco"
                placeholder="Preço do produto"
                type="number"
              ></Input>
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
