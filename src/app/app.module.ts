import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { UsersComponent } from '../app//components/users/users.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Asegúrate de que esté aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
