package com.leitz0.agenda.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leitz0.agenda.dto.ContatoDto;
import com.leitz0.agenda.model.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {

	Page<ContatoDto> findByNomeContainingIgnoreCase (String nome,Pageable pageable);
}
