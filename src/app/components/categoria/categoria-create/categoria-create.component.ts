import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
  }

  constructor(private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCategoria(): void {
    this.categoriaService.create(this.categoria).subscribe(() => {
      this.categoriaService.showMessage('Categoria criada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }
  cancelCategoria(): void {
    this.router.navigate(['/categorias'])
  }

}
