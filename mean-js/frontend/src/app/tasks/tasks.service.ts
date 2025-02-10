import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiBaseUrl: string = 'http://192.168.49.2:32528/api';

  constructor(private readonly http: HttpClient) { }

  fetchTasks(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/tasks`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/tasks`, task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/tasks/${id}`);
  }
}
