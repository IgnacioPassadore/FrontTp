import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexadorComponent } from './components/indexador/indexador.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    NavbarComponent,
    HomeComponent,
    IndexadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
