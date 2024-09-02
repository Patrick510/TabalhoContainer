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

interface DialogEditProps{
  produtos: Produto;
  onSave: (produto: Produto => void)
}

export default function DialogEdit({produto, onSave}: DialogEditProps) {
  const [nome, setNome] = useState(produto.nome)
  const [descricao, setDescricao] = useState(produto.descricao)
  const [preco, setPreco] = useState(produto.preco.toFixed(2))

  const handleSave = () => {
    onSave({
      ...produto,
      nome,
      descricao,
      preco: parseFloat(preco),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
