import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
    
  ) { }

  retrieveAllTodos(username:string){
    // in this case, the diamond <> says what kind of
    // respond are waiting for, like generics in Java, so
    // the kind of response waited by the invoke is a object
    // HelloWorldBean
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("Hello HWBS");
  }
  
}
