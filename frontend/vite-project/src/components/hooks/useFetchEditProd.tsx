import { useState, useEffect } from "react";
import { Produto } from "@/lib/types";

export const useFetchEditProd = (produtoParaEditar: Produto | null) => {
  const [data, setData] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!produtoParaEditar || !produtoParaEditar.id_produto) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `/api/produtos/${produtoParaEditar.id_produto}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(produtoParaEditar),
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao editar produto");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [produtoParaEditar]);

  return { data, loading, error };
};
