import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Edit, Trash } from 'lucide-react';
import { useEffect, useState } from "react";
import { useFetchProd } from "@/components/hooks/useFetchProd";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InputProd from "@/components/InputProd";
import { ModeToggle } from "@/components/ModeToggle";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const { data, loading, error } = useFetchProd();

  useEffect(() => {
    if (data) {
      setProdutos(data);
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full h-[400px] ml-36 mr-36 flex flex-row items-center justify-center rounded-md shadow-md">
      <ModeToggle/>
        <div className="border-r-2 w-full h-full">
          <CardHeader className="text-center">
            <CardTitle className="uppercase font-semibold text-xl">
              Listar produtos
            </CardTitle>
          </CardHeader>
        {loading ? (
            <p>Carregando...</p>
        ) : (
          <CardContent>
            <Table>
              <TableCaption>Sua lista de produtos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>NOME</TableHead>
                  <TableHead className="w-[150px]">PREÇO</TableHead>
                  <TableHead className="text-left">DESCRIÇÃO</TableHead>
                  <TableHead className="text-left">AÇÕES</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableCell className="font-medium text-left">Produto 1</TableCell>
                <TableCell className="text-left">R$ 29,99</TableCell>
                <TableCell className="text-left">Esse produto é de tal tal coisa</TableCell>
                <TableCell className="text-left flex gap-3"><a href="#"><Edit></Edit></a> <a href="#"><Trash></Trash></a> </TableCell>
              </TableBody>
            </Table>
          </CardContent>
        )}

        </div>
        <InputProd />
      </Card>
    </div>
  );
}
