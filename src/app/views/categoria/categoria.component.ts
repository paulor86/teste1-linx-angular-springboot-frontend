import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Registrar Categoria',
      icon: 'category',
      routeUrl: '/categorias'
    }
  }

  ngOnInit(): void {
  }

  navigateToCategoriaCreate(): void {
    this.router.navigate(['/categorias/create'])
  }

}
