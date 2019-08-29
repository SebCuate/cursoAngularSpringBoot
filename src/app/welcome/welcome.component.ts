
// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = 'A welcome message';
  username : string = '';


  //public WelcomeComponent  
  //ActivatedRoute
  constructor(private route:ActivatedRoute) { 

  }

  //void init()
  ngOnInit() : void {
    this.route.snapshot.params['name'];
    // console.log(this.route.snapshot.params['name']);
    this.username = this.route.snapshot.params['name'];
  }

}

export class Class1 {

}
