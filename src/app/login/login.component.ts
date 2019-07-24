import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "elCuato"
  password = "1234"

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    console.log(this.password);
  }

  handPass(){
    console.log("Han pasado sobre mi!!!!!");
  }

}
