import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CalculateurComponent } from './calculateur/calculateur.component';
import { BddUpdaterComponent } from './bdd.updater/bdd.updater.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'recherche', component: RechercheComponent},
  {path: 'calculateur/:itemId', component: CalculateurComponent},
  {path: 'updater', component: BddUpdaterComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
