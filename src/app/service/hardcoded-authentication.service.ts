import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){

    // console.log('Before ' + this.isUserLoggedIn());

    if(
      (username === "elCuato" && password === "1234") ||
      (username === "laOrtega" && password === "1234")
      ){
        sessionStorage.setItem('authenticateUser',username);
        // console.log('After ' + this.isUserLoggedIn());
        return true;
      }

    return false;

  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }




}
