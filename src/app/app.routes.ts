import { Routes } from '@angular/router';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';
import { Accueil } from './accueil/accueil';
import {Contact} from './contact/contact';
import { Page404 } from './page404/page404';


export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'liste', component: Liste },
  { path: 'accueil', component: Accueil },
  { path: 'gestion', component: Gestion },
  { path: 'contact', component: Contact },
  // URL inconnue : on affiche une page 404 dédiée.
  { path: '**', component: Page404 },
];
