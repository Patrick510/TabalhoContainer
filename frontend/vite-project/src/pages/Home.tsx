import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useFetchProd } from "@/components/hooks/useFetchProd";
import InputProd from "@/components/InputProd";
import { ModeToggle } from "@/components/ModeToggle";
import TableProd from "@/components/TableProd";
import { Produto } from "@/lib/types";
import { useFetchAddProd } from "@/components/hooks/useFetchAddProd";
import { useFetchEditProd } from "@/components/hooks/useFetchEditProd";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoParaAdicionar, setProdutoParaAdicionar] =
    useState<Produto | null>(null);
  const [produtoParaEditar, setProdutoParaEditar] = useState<Produto | null>(
    null
  );

  const { data, loading } = useFetchProd();

  const { data: addProdData, loading: addProdLoading } =
    useFetchAddProd(produtoParaAdicionar);

  const { data: editProdData, loading: editProdLoading } =
    useFetchEditProd(produtoParaEditar);

  const fetchAndUpdateProdutos = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getProd");
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setProdutos(data);
    }
  }, [data]);

  useEffect(() => {
    if (addProdData) {
      setProdutos((prev) => [...prev, addProdData]);
      setProdutoParaAdicionar(null);
    }
  }, [addProdData]);

  useEffect(() => {
    if (editProdData) {
      fetchAndUpdateProdutos();
    }
  }, [editProdData]);

  const handleDelete = (produto: Produto) => {
    setProdutos((prev) =>
      prev.filter((p) => p.idProduto !== produto.idProduto)
    );
  };

  const handleSave = (produto: Produto) => {
    setProdutoParaAdicionar(produto);
  };

  const handleSaveEdit = (produtoEditado: Produto) => {
    setProdutoParaEditar(produtoEditado);
  };

  useEffect(() => {
    if (produtoParaEditar) {
      fetchAndUpdateProdutos();
      setProdutoParaEditar(null); // Limpar o estado após a atualização
    }
  }, [produtoParaEditar]);

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
          {loading || addProdLoading || editProdLoading ? (
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
