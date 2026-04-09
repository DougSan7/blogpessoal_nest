import { UsuarioLogin } from './../entities/usuariologin.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsuarioService } from "../../usuario/services/usuario.service";
import { JwtService } from "@nestjs/jwt";
import { Bcrypt } from "../bcrypt/bcrypt";



@Injectable()
export class AuthService{

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt
  ){ }  

  async validateUser(usernome: string, password: string): Promise<any>{

    const buscaUsuario = await this.usuarioService.findByUsuario(usernome)

    if(!buscaUsuario)
    throw new HttpException('Usuario não foi encontrado!', HttpStatus.NOT_FOUND)

    const mathPassword = await this.bcrypt.compararSenhas(password, buscaUsuario.senha)

    if(buscaUsuario && mathPassword){
      const { senha, ...resposta } = buscaUsuario
      return resposta
    }
    return  null
  }

  async login (usuarioLogin: UsuarioLogin){ 
     
    const payload = { sub: usuarioLogin.usuario }

    const buscaUsuario = await this.usuarioService.findByUsuario(usuarioLogin.usuario)

    return{
    id: buscaUsuario?.id,
    nome: buscaUsuario?.nome,
    usuario: usuarioLogin.usuario,
    senha: '',
    foto: buscaUsuario?.foto,
    token: `Bearer ${this.jwtService.sign(payload)}`,
    }
  }
}