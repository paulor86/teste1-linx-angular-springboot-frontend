import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.usuarioService.readById(id).subscribe(usuario => {
      this.usuario = usuario
    });
  }

  deleteUsuario(): void {
    this.usuarioService.delete(this.usuario.id).subscribe(() => {
      this.usuarioService.showMessage('Usuário excluído com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }
  cancelUsuario(): void {
    this.router.navigate(['/usuarios'])
  }

}
