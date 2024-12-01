import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  message: string = 'Default msg'

  constructor() { }

  setMessage(input: string): void {
    this.message = input;
  }

  getMessage() {
    return this.message;
  }
}
