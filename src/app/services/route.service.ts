import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

constructor(private router:Router) { }
navigateToLoginView() {
  this.router.navigate(["login"]);
  }

navigateToHomeView(){
  this.router.navigate(["home"]);
}

navigateToOrderPlaced()
{
  this.router.navigate(["orderPlaced"]);
}

navigateToFilterDisplay()
{
  this.router.navigate(["filterDisplay"]);
}
}

