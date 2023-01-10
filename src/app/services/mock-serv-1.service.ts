import { Inject } from '@angular/core';

@Inject({
  providedIn: 'root'
})
export class MockServ1Service {

  constructor() { }

  alertLogout(modalData: any) {
    alert("User with ID " + modalData.userId + " has logged out.");
  }
}