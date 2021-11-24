import { Injectable } from '@angular/core';
import { AddJoueurComponent } from '../add-joueur/add-joueur.component';
import { Joueur } from '../model/joueur.model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  joueurs : Joueur[];
  joueur :Joueur;

  constructor() { 

    this.joueurs = [
      {idJoueur : 1, nomJoueur : "PC Asus", numJoueur : 3000.600, equipeJoueur :"barcelona" ,
      dateSingiature : new Date("01/14/2011")},
      {idJoueur : 1, nomJoueur : "PC Asus", numJoueur : 3000.600, equipeJoueur :"barcelona" ,
      dateSingiature : new Date("01/14/2011")},
      {idJoueur : 1, nomJoueur : "PC Asus", numJoueur : 3000.600, equipeJoueur :"barcelona" ,
      dateSingiature : new Date("01/14/2011")},
      ];

  }
  listeJoueurs():Joueur[] {
    return this.joueurs;
}
ajouterJoueur( joueur: Joueur){
  this.joueurs.push(joueur);
  }
  supprimerJoueur( joueur: Joueur){
    
    const index = this.joueurs.indexOf(joueur, 0);
    if (index > -1) {
    this.joueurs.splice(index, 1);
    }
    
    }
    consulterJoueur(id:number): Joueur{
      this.joueur = this.joueurs.find(p => p.idJoueur == id);
      return this.joueur;
      }
      updateJoueur(joueur:Joueur)
    {
    
      this.supprimerJoueur(joueur);
      this.ajouterJoueur(joueur);
      this.trierJoueurs();
    }
    trierJoueurs(){
      this.joueurs = this.joueurs.sort((n1,n2) => {
      if (n1.idJoueur > n2.idJoueur) {
      return 1;
      }
      if (n1.idJoueur < n2.idJoueur) {
      return -1;
      }
      return 0;
      });
      }

   
    

}
