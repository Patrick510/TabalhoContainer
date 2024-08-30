package com.microservico.backend.repository;

import com.microservico.backend.jpa.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
