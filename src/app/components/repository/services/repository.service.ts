import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.models';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private baseUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getUserRepositories(
    loginName: string,
    perPage: number = 5,
    page: number = 1
  ): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      this.baseUrl +
        'users/' +
        loginName +
        '/repos?per_page=' +
        perPage +
        '&page=' +
        page
    );
  }
}
