import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../login-view-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginViewModel:LoginViewModel
  loginError:string=""

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick(event){
    
  }

}
