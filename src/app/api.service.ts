import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getRegisteredUserId: any;
  deleteRegistered(id: number) {
    throw new Error('Method not implemented.');
  }
  getRegisteredUser() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
