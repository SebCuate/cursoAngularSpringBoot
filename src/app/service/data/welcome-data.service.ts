import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(
    public message:string
  ){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(username:string){
    // in this case, the diamond <> says what kind of
    // respond are waiting for, like generics in Java, so
    // the kind of response waited by the invoke is a object
    // HelloWorldBean
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloBean/variable/${username}`);
    // console.log("Hello HWBS");
  }
}
