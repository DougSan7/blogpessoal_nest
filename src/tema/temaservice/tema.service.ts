import { Tema } from './../entities/tema.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class TemaService{
  findByTema(titulo: string): Promise<Tema[]> {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>
  ){}

  async findAll(): Promise<Tema[]>{
    return await this.temaRepository.find();
  }  

  async findById(id:number): Promise<Tema>{
    const tema = await this.temaRepository.findOne({
      where: {id},
      relations: {postagem: true}
    });

    if(!tema){
      throw new HttpException('Tema não encontrada', HttpStatus.NOT_FOUND);
    }
    return tema;
  }
  
  async findByDescricao(descricao: String): Promise<Tema[]>{
    return await this.temaRepository.find({
      where: { descricao: ILike(`%${descricao}%`) },
      relations: {postagem: true}
    });
  }
  
  async create(Tema: Tema): Promise<Tema>{
    return await this.temaRepository.save(Tema);
  }  

  async update(Tema: Tema): Promise<Tema>{

    const buscarTema: Tema = await this.findById(Tema.id);

    if(!buscarTema || !Tema.id){
      throw new HttpException('Tema não encontrada', HttpStatus.NOT_FOUND);
    }
    return await this.temaRepository.save(Tema);
  }

  async delete(id:number): Promise<DeleteResult>{
    await this.findById(id);

    return await this.temaRepository.delete(id);
  }
}