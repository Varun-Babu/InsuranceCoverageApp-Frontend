import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    this.isAuthenticated = localStorage.getItem('authenticated') === 'true' || false;
  }

  login() {
    this.isAuthenticated = true;
    localStorage.setItem('authenticated', 'true');
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('authenticated');
  }

  authenticate(): boolean {
    return this.isAuthenticated;
  }
}
