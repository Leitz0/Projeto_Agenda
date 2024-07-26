package com.leitz0.agenda.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.leitz0.agenda.dto.ContatoDto;
import com.leitz0.agenda.model.Contato;
import com.leitz0.agenda.repository.ContatoRepository;

import jakarta.validation.Valid;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;

	public Page<ContatoDto> getcontatos(Pageable pageable) {
		return repository.findAll(pageable).map(c -> ContatoDto.toDto(c));
	}

	public Optional <ContatoDto> createContato(@Valid ContatoDto contato) {
		Contato novo = contato.toEntity();
		repository.save(novo);
		return Optional.of(ContatoDto.toDto(novo));
	}

	public Page<ContatoDto> getNome(String nome, Pageable pageable) {
		return repository.findByNomeContainingIgnoreCase(nome, pageable);
	}

}
