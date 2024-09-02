import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useFetchProd } from "@/components/hooks/useFetchProd";
import InputProd from "@/components/InputProd";
import { ModeToggle } from "@/components/ModeToggle";
import TableProd from "@/components/TableProd";
import { Produto } from "@/lib/types";
import { useFetchAddProd } from "@/components/hooks/useFetchAddProd";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoParaAdicionar, setProdutoParaAdicionar] =
    useState<Produto | null>(null);

  const { data, loading, error } = useFetchProd();
  const {
    data: addProdData,
    loading: addProdLoading,
    error: addProdError,
  } = useFetchAddProd(produtoParaAdicionar);

  useEffect(() => {
    if (data) {
      setProdutos(data);
    }
  }, [data]);

  useEffect(() => {
    if (addProdData) {
      // Recarregar a lista de produtos após adicionar um novo
      setProdutoParaAdicionar(null); // Limpar o estado
    }
  }, [addProdData]);

  const handleSaveEdit = (produtoEditado: Produto) => {
    setProdutos((prev) =>
      prev.map((produto) =>
        produto.id === produtoEditado.id ? produtoEditado : produto
      )
    );
  };

  const handleDelete = (produto: Produto) => {
    setProdutos((prev) => prev.filter((p) => p.id !== produto.id));
  };

  const handleSave = (produto: Produto) => {
    setProdutoParaAdicionar(produto);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full h-full lg:h-[400px] ml-36 mr-36 flex flex-col lg:flex-row items-center justify-center rounded-md shadow-md">
        <InputProd onSave={handleSave} />
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
              <TableProd
                produtos={produtos}
                onSaveEdit={handleSaveEdit}
                onDelete={handleDelete}
              />
            </CardContent>
          )}
        </div>
      </Card>
    </div>
  );
}
