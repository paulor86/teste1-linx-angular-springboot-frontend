import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
    preco: null,
    imgUrl: ''
  }

  constructor(private produtosService: ProdutosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduto(): void {
    this.produtosService.create(this.produto).subscribe(() => {
      this.produtosService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }
  cancelProduto(): void {
    this.router.navigate(['/produtos'])
  }

}
