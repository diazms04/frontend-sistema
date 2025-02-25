import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from '../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];
  transactionForm: FormGroup;
  userId: number | null = null; // Variable para almacenar el ID del usuario

  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder,
    private route: ActivatedRoute // Inyectar ActivatedRoute
  ) {
    this.transactionForm = this.fb.group({
      user_id: [null, Validators.required], // Cambiar a null inicialmente
      amount: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['user_id']; // Obtener el ID del usuario de la ruta
      if (this.userId) {
        this.transactionForm.patchValue({ user_id: this.userId }); // Establecer el ID del usuario en el formulario
        this.loadTransactions(); // Cargar las transacciones del usuario
      }
    });
  }

  loadTransactions() {
    if (this.userId) {
      this.transactionService.getTransactionsByUser(this.userId).subscribe(data => {
        this.transactions = data; // Cargar las transacciones del usuario
      }, error => {
        console.error('Error al cargar las transacciones:', error);
      });
    }
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      console.log("Formulario enviado:", this.transactionForm.value); // Log del formulario

      this.transactionService.createTransaction(this.transactionForm.value).subscribe((response) => {
        this.transactions.push(response); // Añadir la transacción a la lista
        this.transactionForm.reset(); // Resetear el formulario
        // Recargar la página
        location.reload();
      }, (error) => {
        console.error("Error al crear la transacción:", error); // Manejo de errores
      });
    } else {
      console.log("Formulario no válido:", this.transactionForm.errors); // Log de errores
    }
  }
}
