import { useState, useEffect } from "react";
import { Produto } from "@/lib/types";

export const useFetchAddProd = (produto: Produto | null) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (produto === null) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/api/addProd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(produto),
        });

        if (!res.ok) {
          throw new Error("Erro ao adicionar produto");
        }

        const json = await res.json();
        setData(json);
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
  }, [produto]);

  return { data, loading, error };
};
