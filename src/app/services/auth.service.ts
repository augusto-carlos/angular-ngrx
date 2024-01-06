import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'https://4w3j1.wiremockapi.cloud';

  constructor(private readonly http: HttpClient) {}

  login(creadentials: CredentialModel) {
    return this.http.post<UserModel>(`${this.baseUrl}/login`, creadentials);
  }
}

interface CredentialModel {
  email: string;
  password: string;
}
