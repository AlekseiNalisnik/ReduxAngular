import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { map } from 'rxjs/operators';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
    private readonly authUrl = `${environment.apiUrl}/users`;
    private readonly getCurrentUserUrl = `${environment.apiUrl}/user`;

    constructor(private http: HttpClient) { }

    public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        return this.http.post<AuthResponseInterface>(this.authUrl, data)
            .pipe(map(this.getUser));
    }

    public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        return this.http.post<AuthResponseInterface>(`${this.authUrl}/login`, data)
        .pipe(map(this.getUser));
    }

    public getCurrentUser(): Observable<CurrentUserInterface> {
        return this.http.get(this.getCurrentUserUrl)
            .pipe(map(this.getUser));
    }

    private getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }  
}