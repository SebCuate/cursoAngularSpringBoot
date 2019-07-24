
//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'A welcome message';

  //public WilcomeComponent
  constructor() { 

  }

  //void init()
  ngOnInit() : void {

    console.log(this.message)
  }

}

export class Class1 {

}
