import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:5500/api/users'; // url local

  private apiUrl = 'https://backend-sistema.onrender.com/api/users'; // url desplegada
  
  constructor(private http: HttpClient) { }

  // Método para obtener todos los usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para crear un nuevo usuario
  createUser(user: { name: string; email: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers });
  }
}
