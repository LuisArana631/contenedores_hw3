import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private readonly http: HttpClient) { }

  fetchTasks(): Observable<any> {
    return this.http.get('http://localhost:3000/api/tasks');
  }

  addTask(task: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/tasks', task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`http://localhost:3000/api/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`/http://localhost:3000api/tasks/${id}`);
  }
}
