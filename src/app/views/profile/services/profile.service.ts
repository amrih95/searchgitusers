import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getProfile(loginName: string): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl + 'users/' + loginName);
  }
}
