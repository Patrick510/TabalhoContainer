import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import { Produto } from "@/lib/types";
import { useState } from "react";

interface DialogEditProps {
  produto: Produto;
  onSaveEdit: (produto: Produto) => void;
}

export default function DialogEdit({
  produto,
  onSaveEdit,
}: Readonly<DialogEditProps>) {
  const [nome, setNome] = useState(produto.nome);
  const [descricao, setDescricao] = useState(produto.descricao);
  const [preco, setPreco] = useState(produto.preco.toFixed(2));
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSaveEdit({ ...produto, nome, descricao, preco: parseFloat(preco) });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
          <DialogDescription>
            Faça as alterações do produto. Clique em Salvar para confirmar as
            alterações.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="descricao">Descrição</Label>
            <Input
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="preco">Preco</Label>
            <Input
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Salvar mudanças
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
