import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { ModuleService } from '../services/module.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  modules: any[] = [];

  constructor(private loginService: LoginService, private moduleService: ModuleService, private router: Router, private http: HttpClient) { }

  login(username: string, password: string): void {
    this.loginService.login(username, password).subscribe(
      response => {
        const etudiantId = response.etudiantId;
        this.moduleService.getModulesByEtudiantId(etudiantId).subscribe( modules => {
            this.modules = modules;
            this.router.navigateByUrl('/home');

          },
          error => {
            console.error('Erreur lors de la récupération des modules de l\'étudiant :', error);
          }
        );
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }
}
