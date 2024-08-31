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

export default function TableProd({ produtos }: { produtos: Array<any> }) {
  return (
    <Table>
      <TableCaption>Fim da lista de produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>NOME</TableHead>
          <TableHead className="w-[70px]">PREÇO</TableHead>
          <TableHead className="text-left">DESCRIÇÃO</TableHead>
          <TableHead className="text-left">AÇÕES</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="w-max">
        {produtos.map((produto) => (
          <TableRow key={produto.id}>
            <TableCell className="font-medium text-left">
              {produto.nome}
            </TableCell>
            <TableCell className="text-left">R$ {produto.preco}</TableCell>
            <TableCell className="text-left max-w-[250px] scrollbar-custom overflow-x-auto whitespace-nowrap">
              {produto.descricao}
            </TableCell>
            <TableCell className="text-left flex gap-3 items-center mt-2">
              <a href="#">
                <DialogEdit />
              </a>{" "}
              <a href="#">
                <DialogDel />
              </a>{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
