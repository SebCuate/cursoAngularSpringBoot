import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "elCuato";
  password = "";
  invalidLogin = false;
  errorMessage = "Not valid credentials";

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcoded : HardcodedAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);
    if(
      this.hardcoded.authenticate(this.username, this.password)
      // this.username === "elCuato" 
      // && this.password === "1234"
      ){
      this.router.navigate(['welcome',this.username] );
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }

  // Metodo de ejemplo para Event-Binding
  // palabraSecreta = "HOLA"
  // SendData(Username: string): void
  // {
  //   // alert("user name " + Username);
  //   console.log(this.palabraSecreta);
  //   this.palabraSecreta = Username;
  //   console.log(this.palabraSecreta);
  //   this.palabraSecreta = "Hola";
  // }

  handPass(){
    console.log("Han pasado sobre mi!!!!!");
  }

}
