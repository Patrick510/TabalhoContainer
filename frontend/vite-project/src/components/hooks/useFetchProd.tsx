import { useState, useEffect } from "react";

export const useFetchProd = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:8000/api/getProd`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json = await res.json();
        console.log("Resposta da API:", json); // Adicione este log para depuração
        setData(json);

        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro desconhecido");
        }
        console.error("Não foi possível encontrar os produtos:", error); // Adicione a mensagem de erro ao log
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
