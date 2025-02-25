import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html', 
  styleUrls: ['./users.component.css'], 
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]) // Agrega la validación de correo electrónico
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }

  addUser() {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe(
        (newUser) => {
          this.users.push(newUser);
          this.userForm.reset();
        },
        (error) => {
          console.error('Error al crear el usuario', error);
        }
      );
    }
  }

  viewTransactions(userId: number) {
    this.router.navigate(['/transactions', userId]);
  }
}
