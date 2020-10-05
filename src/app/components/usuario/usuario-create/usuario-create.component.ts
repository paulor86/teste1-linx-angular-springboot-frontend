import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    logradouro: '',
    telefone: '',
    email: '',
    senha: ''
  }

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário criado com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }
  cancelUsuario(): void {
    this.router.navigate(['/usuarios'])
  }

}
