/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {  Column,  Entity,  ManyToOne,  PrimaryGeneratedColumn,  UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';

@Entity({ name: 'tb_postagens' }) //Cria uma tabela chamada tb_postagem
export class Postagem {
  @PrimaryGeneratedColumn() //cria uma chave primaria e auto increment
  id!: number;

  @IsNotEmpty() // verifica se o campo está vazio
  @Column({ length: 1000, nullable: false }) //cria uma columa chamada titulo, com 100 caracteres e não pode ser nulo
  titulo!: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto!: string;

  @UpdateDateColumn() //Cria uma coluna chamada data atualização da postagem
  data!: string;

  @ManyToOne(() => Tema, (tema) => tema.postagem,{
    onDelete: "CASCADE"
  })
  
  tema!: Tema;
}
