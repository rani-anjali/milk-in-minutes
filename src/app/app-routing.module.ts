import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewsComponent } from './product-views/product-views.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { LoginComponent } from './login/login.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilteredDisplayComponent } from './filtered-display/filtered-display.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/products",
    pathMatch:"full"
  },
  {
    path:"products",
    component:ProductViewsComponent
  },
  {
    path:'products/:id',
    component:OrderViewComponent,
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path:"home",
    redirectTo:"/products",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"filterDisplay",
    component:FilteredDisplayComponent
  },
  {
    path:"orderPlaced",
    component:OrderPlacedComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
