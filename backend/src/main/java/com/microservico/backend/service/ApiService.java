package com.microservico.backend.service;

import com.microservico.backend.jpa.Produto;
import com.microservico.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApiService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public void addProduto(Produto produto) {
        System.out.println("Produto a ser salvo: " + produto);
        produtoRepository.save(produto);
    }

    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }

    public String editarProduto(long id, Produto request) {
        Optional<Produto> produtoExistente = produtoRepository.findById(id);

        if (produtoExistente.isPresent()) {
            Produto produto = produtoExistente.get();
            produto.setNome(request.getNome());
            produto.setDescricao(request.getDescricao());
            produto.setPreco(request.getPreco());
            produtoRepository.save(produto);
            return "Produto atualizado com sucesso!";
        } else {
            return "Produto não encontrado";
        }
    }

    public String excluirProduto(long id) {
        Optional<Produto> produtoExistente = produtoRepository.findById(id);

        if (produtoExistente.isPresent()) {
            produtoRepository.deleteById(id);
            return "Produto excluído com sucesso!";
        } else {
            return "Produto não encontrado";
        }
    }

}
