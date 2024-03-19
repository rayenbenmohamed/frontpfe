import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3001/api'; // Remplacez cela par l'URL de votre API Node.js

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Définissez l'URL de l'endpoint de connexion dans votre API Node.js
    const loginUrl = `${this.apiUrl}/login`;

    // Envoyez une requête POST avec les informations d'identification
    return this.http.post(loginUrl, { username, password });
  }
}
