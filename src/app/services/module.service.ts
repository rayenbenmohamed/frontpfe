import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from '../model/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = 'http://localhost:3001/api'; // Mettez l'URL de votre API Node.js

  constructor(private http: HttpClient) { }
  getModules(): Observable<any[]> {
    // Récupérer le token du localStorage
    const token = localStorage.getItem('token');

    // Créer les en-têtes HTTP, incluant l'en-tête 'Authorization' avec le token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Effectuer la requête GET avec les en-têtes inclus
    return this.http.get<any[]>(`${this.baseUrl}/modules`, { headers });
  }

  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/modules`);
  }

  getModuleById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/modules/${id}`);
  }

  createModule(moduleData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/modules`, moduleData);
  }

  updateModule(id: string, moduleData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/modules/${id}`, moduleData);
  }

  deleteModule(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/modules/${id}`);
  }
  getModulesByEtudiantId(etudiantId: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/modules/${etudiantId}`);
  }
  
  // Ajoutez d'autres méthodes selon vos besoins
}
