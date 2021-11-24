import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';

const routes: Routes = [
  {path: "joueurs", component : JoueursComponent},
  {path: "add-joueur", component : AddJoueurComponent},
  { path: "", redirectTo: "joueurs", pathMatch: "full" },
  {path: "updateJoueur/:id", component: UpdateJoueurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
