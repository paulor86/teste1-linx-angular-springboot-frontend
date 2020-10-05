import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { CategoriaComponent } from'./views/categoria/categoria.component';
import { CategoriaCreateComponent } from'./components/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from'./components/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from'./components/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from'./components/categoria/categoria-delete/categoria-delete.component';

import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

import { PedidoComponent } from './views/pedido/pedido.component';
import { PedidoReadComponent } from './components/pedido/pedido-read/pedido-read.component';
import { PedidoCreateComponent } from './components/pedido/pedido-create/pedido-create.component';
import { PedidoUpdateComponent } from './components/pedido/pedido-update/pedido-update.component'; 

import { UsuarioComponent } from './views/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "categorias",
    component: CategoriaComponent
  },
  {
    path: "categorias/create",
    component: CategoriaCreateComponent
  },
  {
    path: "categorias/read/:id",
    component: CategoriaReadComponent
  },
  {
    path: "categorias/update/:id",
    component: CategoriaUpdateComponent
  },
  {
    path: "categorias/delete/:id",
    component: CategoriaDeleteComponent
  },
  {
    path: "produtos",
    component: ProdutoComponent
  },
  {
    path: "produtos/create",
    component: ProdutoCreateComponent
  },
  {
    path: "produtos/read/:id",
    component: ProdutoReadComponent
  },
  {
    path: "produtos/update/:id",
    component: ProdutoUpdateComponent
  },
  {
    path: "produtos/delete/:id",
    component: ProdutoDeleteComponent
  },
  {
    path: "pedidos",
    component: PedidoComponent
  },
  {
    path: "pedidos/create",
    component: PedidoCreateComponent
  },
  {
    path: "pedidos/read/:id",
    component: PedidoReadComponent
  },
  { 
    path: "pedidos/update/:id",
    component: PedidoUpdateComponent
  },
  {
    path: "usuarios",
    component: UsuarioComponent
  },
  {
    path: "usuarios/create",
    component: UsuarioCreateComponent
  },
  {
    path: "usuarios/read/:id",
    component: UsuarioReadComponent
  },
  {
    path:"usuarios/update/:id",
    component: UsuarioUpdateComponent
  },
  {
    path: "usuarios/delete/:id",
    component: UsuarioDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
