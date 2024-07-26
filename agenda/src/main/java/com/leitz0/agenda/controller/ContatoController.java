package com.leitz0.agenda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.leitz0.agenda.dto.ContatoDto;
import com.leitz0.agenda.service.ContatoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping ("/contatos")
public class ContatoController {
	
	@Autowired
	private ContatoService service;
	

	@GetMapping
	public ResponseEntity <Page<ContatoDto>> getContatos(
			@PageableDefault(size= 20, page = 0, sort = "nome", direction = Sort.Direction.ASC) Pageable pageable){
	Page<ContatoDto> contatos = service.getcontatos(pageable);
	return ResponseEntity.ok(contatos);
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<Page<ContatoDto>> getContatoNome(
            @PathVariable String name,
            @PageableDefault(size = 20, page = 0, sort = "nome", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<ContatoDto> contatos = service.getNome(name, pageable);
        return ResponseEntity.ok(contatos);
    }
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ContatoDto> createContato(@RequestBody @Valid ContatoDto contato){
		return ResponseEntity.of(service.createContato(contato));
	}

}
