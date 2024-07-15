import { Component, EventEmitter, Output } from '@angular/core';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string='Milk in Minutes';

  constructor(private routerService:RouteService){}

  openFilter()
  {
    this.routerService.navigateToFilterDisplay()
  }

}

