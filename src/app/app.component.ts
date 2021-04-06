import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';
  LS:LoginService
  constructor(private loginService:LoginService){
    this.LS=loginService;
  }
}
