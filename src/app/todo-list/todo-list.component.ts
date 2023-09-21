import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  newTask: string = '';
  maxTasksPerColumn = 11;
  maxColumns = 15;
  columns: { tasks: { text: string, completed: boolean }[] }[] = [
    { tasks: [] }
  ];

  addTask() {
    if (this.newTask.trim() !== '') {
      const currentColumn = this.columns[this.columns.length - 1];
      if (currentColumn.tasks.length < this.maxTasksPerColumn) {
        currentColumn.tasks.push({ text: this.newTask, completed: false });
      } else if (this.columns.length < this.maxColumns) {
        this.columns.push({ tasks: [{ text: this.newTask, completed: false }] });
      }
      this.newTask = '';
    }
  }

  removeTask(columnIndex: number, taskIndex: number) {
    this.columns[columnIndex].tasks.splice(taskIndex, 1);

    if (this.columns[columnIndex].tasks.length === 0) {
      this.columns.splice(columnIndex, 1);
    }
  }
  
}
