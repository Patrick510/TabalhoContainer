import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useFetchProd } from "@/components/hooks/useFetchProd";
import InputProd from "@/components/InputProd";
import { ModeToggle } from "@/components/ModeToggle";
import TableProd from "@/components/TableProd";

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
      <Card className="w-full h-full lg:h-[400px] ml-36 mr-36 flex flex-col lg:flex-row items-center justify-center rounded-md shadow-md">
        <InputProd setProdutos={setProdutos} />
        <div className="lg:border-l-2 w-full h-full">
          <CardHeader className="text-center ">
            <CardTitle className="uppercase font-semibold text-xl">
              Listar produtos
            </CardTitle>
            <div className="absolute top-2 right-2">
              <ModeToggle />
            </div>
          </CardHeader>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <CardContent>
              <TableProd produtos={produtos} />
            </CardContent>
          )}
        </div>
      </Card>
    </div>
  );
}
