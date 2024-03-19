import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = 'http://localhost:3001/api/categories'; // Ajustez selon l'URL de votre API

  constructor(private http: HttpClient) { }

  // Pour lister toutes les catégories
  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Pour obtenir les détails d'une seule catégorie par son ID
  getCategorieById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Pour créer une catégorie
  createCategorie(categorieData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, categorieData);
  }

  // Pour mettre à jour une catégorie
  updateCategorie(id: string, categorieData: FormData): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, categorieData);
  }

  // Pour supprimer une catégorie
  deleteCategorie(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
