import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  currentUserName:string=null
  public Login(loginViewModel:LoginViewModel):Observable<any> {
    return this.httpClient.post<any>("authenticate",loginViewModel,{responseType:"json"})
  }
  public LogOut(){
    this.currentUserName=null;
  }

}
