import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiBaseUrl: string = environment.apiBaseUrl ?? 'Not found';

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
