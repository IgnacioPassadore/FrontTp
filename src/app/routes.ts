import { Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscador', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
