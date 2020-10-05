import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[]
  displayedColumns = ['id', 'nome', 'action']

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
      console.log(categorias)
    })
  }

}
