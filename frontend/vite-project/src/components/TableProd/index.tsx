import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DialogEdit from "@/components/DialogEdit";
import DialogDel from "@/components/DialogDel";
import { Produto } from "@/lib/types";

interface TableProdProps {
  produtos: Produto[];
  onSaveEdit: (produto: Produto) => void;
  onDelete: (produto: Produto) => void;
}

export default function TableProd({
  produtos,
  onSaveEdit,
  onDelete,
}: Readonly<TableProdProps>) {
  if (!produtos || produtos.length === 0) {
    return <p>Nenhum produto encontrado</p>;
  }

  return (
    <Table>
      <TableCaption>Fim da lista de produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>NOME</TableHead>
          <TableHead className="">PREÇO</TableHead>
          <TableHead className="text-left">DESCRIÇÃO</TableHead>
          <TableHead className="text-left">AÇÕES</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-max">
        {produtos.map((produto) => {
          if (!produto) return null; // Skip null or undefined products
          return (
            <TableRow key={produto.idProduto}>
              <TableCell className="font-medium text-left">
                {produto.nome}
              </TableCell>
              <TableCell className="text-left">
                R$ {produto.preco.toFixed(2)}
              </TableCell>
              <TableCell className="text-left w-[200px] scrollbar-custom overflow-x-auto whitespace-nowrap">
                {produto.descricao}
              </TableCell>
              <TableCell className="text-left flex gap-3 items-center mt-2">
                <DialogEdit produto={produto} onSaveEdit={onSaveEdit} />{" "}
                <DialogDel onDelete={() => onDelete(produto)} />{" "}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
