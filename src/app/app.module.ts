import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductViewsComponent } from './product-views/product-views.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { OrderViewComponent } from './order-view/order-view.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilteredDisplayComponent } from './filtered-display/filtered-display.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ProductComponent,
    ProductViewsComponent,
    SearchComponent,
    FilterComponent,
    OrderViewComponent,
    LoginComponent,
    OrderPlacedComponent,
    PageNotFoundComponent,
    FilteredDisplayComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatRippleModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
