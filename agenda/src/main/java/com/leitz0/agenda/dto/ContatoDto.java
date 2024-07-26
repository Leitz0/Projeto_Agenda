package com.leitz0.agenda.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.leitz0.agenda.model.Contato;
import com.leitz0.agenda.util.Mapper;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;

public record ContatoDto(
    Long id,
    @NotBlank
    String nome,
    String apelido,
    String empresa,
    String telefone,
    String celular,
    String email,
    @JsonProperty("dataNascimento")
    @Past(message = "Data de nascimento deve ser no passado")
    //@JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate dataNascimento) {

    public Contato toEntity() {
        return Mapper.getMapper().convertValue(this, Contato.class);
    }

    public static ContatoDto toDto(Contato novo) {
        return Mapper.getMapper().convertValue(novo, ContatoDto.class);
    }

	
}
