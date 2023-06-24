import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPasswordService {
  public password: string = ''

  setPassword(password: string) {
    this.password = password
  }

  getPassword(){return this.password}
}
