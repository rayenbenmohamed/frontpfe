import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../services/module.service'; // Assurez-vous que le chemin d'accès est correct

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  modules: any[] = [];
  module: any;

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.getAllModules();
  }
  loadModules(): void {
    this.moduleService.getModules().subscribe(
      (modules) => {
        this.modules = modules;
      },
      (error) => {
        console.error('Erreur lors de la récupération des modules', error);
      }
    );
  }
  
  getAllModules(): void {
    this.moduleService.getAllModules().subscribe({
      next: (data) => {
        this.modules = data;
      },
      error: (e) => console.error(e)
    });
  }

  getModuleById(id: string): void {
    this.moduleService.getModuleById(id).subscribe({
      next: (data) => {
        this.module = data;
      },
      error: (e) => console.error(e)
    });
  }
}
