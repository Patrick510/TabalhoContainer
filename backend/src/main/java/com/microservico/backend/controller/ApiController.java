package com.microservico.backend.controller;

import com.microservico.backend.jpa.Produto;
import com.microservico.backend.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ApiService apiService;

    @GetMapping
    public String get() {
        return "RODANDO";
    }

    @PostMapping("/addProd")
    public void addProd(@RequestBody List<Produto> produtos){
        apiService.addProduto(produtos);
    }

    @GetMapping("/getProd")
    public List<Produto> getProd(){
        return apiService.listarProdutos();
    }

    @PutMapping("/editProd/{id}")
    public String editProd(@PathVariable long id, @RequestBody Produto produto) {
        return apiService.editarProduto(id, produto);
    }

    @DeleteMapping("/deleteProd/{id}")
    public String deleteProd(@PathVariable long id) {
        return apiService.excluirProduto(id);
    }

}
