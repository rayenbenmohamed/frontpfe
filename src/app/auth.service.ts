import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private tokenKey = 'token';
  private compteInfo: any = null;
  private userModules: any[] = [];

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/api/login', { nomUtilisateur: username, motDePasse: password });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/api/register', { nomUtilisateur: username, motDePasse: password });
  }

  logout(): void {
    // Supprimer le token du stockage local lors de la déconnexion
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Méthode pour définir le token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticated = true; // Définir l'authentification sur true une fois le token défini
  }

  // Méthode pour récupérer le token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  setCompte(compte: any): void {
    this.compteInfo = compte;
  }
  
  getCompteInfo(): any {
    return this.compteInfo;
  }
  
  setModules(modules: any[]): void {
    this.userModules = modules;
  }
  
  getModules(): any[] {
    return this.userModules;
  }
}
