import {Component, Input} from '@angular/core'
import { LoginService } from 'src/app/login.service'

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent {

    @Input() login_Service:LoginService
    
}