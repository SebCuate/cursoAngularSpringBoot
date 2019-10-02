import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id : number,
    public user : string,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html', 
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos : Todo[];
  // = [
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(2, 'Learn Spring', false, new Date()),
  //   new Todo(3, 'Visit some place', false, new Date()),
  //   new Todo(4, 'Walk in a park', false, new Date()),
  //   new Todo(5, 'Visit my family', false, new Date())
  //   // {id : 1, description : 'Learn Angular'},
  //   // {id : 2, description : 'Learn Spring'},
  //   // {id : 3, description : 'Visit some place'}
  // ];
  
  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('elCuato').subscribe(
      response =>{
        this.todos = response;
      }
    )
  }

}
