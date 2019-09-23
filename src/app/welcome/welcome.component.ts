
// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : string = '';
  username : string = '';


  //public WelcomeComponent  
  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { 

  }

  //void init()
  ngOnInit() : void {
    this.route.snapshot.params['name'];
    // console.log(this.route.snapshot.params['name']);
    this.username = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(username:string) : void {
    // console.log(this.service.executeHelloWorldBeanService(username));
    this.service.executeHelloWorldBeanService(username).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
      // response => console.log(response)
    );

    // console.log("EO Method")
  }

  handleSuccesfulResponse(response){
    this.message = response.message 
    + " it is " + new Date().getHours() 
    + ":"+ new Date().getMinutes()
    + ":" + new Date().getSeconds()
    ;
    console.log(response.message);
  }

  handleErrorResponse(error){
    // console.log("Hay error");
    console.log(error.error.message);
    this.message = "ERROR!!!";
  }

  clearMessage(){
    this.message = '';
  }

}

export class Class1 {

}
