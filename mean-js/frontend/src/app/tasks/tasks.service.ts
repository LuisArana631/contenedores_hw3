import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly baseURL: string = 'http://192.168.49.2:30123/api'
  constructor(private readonly http: HttpClient) { }

  fetchTasks(): Observable<any> {
    return this.http.get(`${this.baseURL}/tasks`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(`${this.baseURL}/tasks`, task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`${this.baseURL}/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/tasks/${id}`);
  }
}
