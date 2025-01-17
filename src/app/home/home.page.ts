import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor() {
    this.username = localStorage.getItem('username') || 'Usuario'; // Recupera el nombre de usuario
  }
}
