import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private routerService:RouteService, private authService:AuthService){}

  adminCode:string='';

  ngOnInit():void{}

  validateOrderView(){
    this.authService.login(this.adminCode);
    if(this.authService.isLoggedIn)
      {
        this.routerService.navigateToOrderPlaced();
      }
  }
}
