import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Registrar Usuario',
      icon: 'person',
      routeUrl: '/usuarios'
    }
  }

  ngOnInit(): void {
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['/usuarios/create'])
  }

}
