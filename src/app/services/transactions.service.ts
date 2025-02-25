import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // private apiUrl = 'http://localhost:5500/api/transactions'; // url api local
  
  private apiUrl = 'https://backend-sistema.onrender.com/api/transactions'; // url api desplegada
  constructor(private http: HttpClient) {}

  // Método para crear una nueva transacción
  createTransaction(transaction: { user_id: number; amount: number; type: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, transaction, { headers });
  }

  // Método para obtener las transacciones de un usuario
  getTransactionsByUser(user_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${user_id}`);
  }
}
