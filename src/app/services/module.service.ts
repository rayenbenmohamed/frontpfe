import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = 'http://localhost:3001/api'; // Mettez l'URL de votre API Node.js

  constructor(private http: HttpClient) { }

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
