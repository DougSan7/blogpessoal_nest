/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {  Column,  Entity,  OneToMany,  PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_temas' }) //Cria uma tabela chamada 
export class Tema {
  
  @PrimaryGeneratedColumn() //cria uma chave primaria e auto increment
  id: number;

  @IsNotEmpty() // verifica se o campo está vazio
  @Column({ length: 255, nullable: false }) 
  descricao: string;

  @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
  postagem: Postagem;
}

