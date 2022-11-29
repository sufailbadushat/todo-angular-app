import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent {
  
  constructor(private api:ApiService){
    api.fetchTodo().subscribe(
      (response)=>{
        this.todo=response;
      }
    )
  }
  
  todo:any=[]
}
