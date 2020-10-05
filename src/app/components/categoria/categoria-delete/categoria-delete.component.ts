import { Component, OnInit } from '@angular/core';
import { Categoria } from './../categoria.model' 
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.categoriaService.readById(id).subscribe(categoria => {
      this.categoria = categoria
    });
  }

  deleteCategoria(): void {
    this.categoriaService.delete(this.categoria.id).subscribe(() => {
      this.categoriaService.showMessage('Categoria deletada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

  cancelCategoria(): void {
    this.router.navigate(['/categorias'])
  }
}
