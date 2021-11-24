import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  joueurs : Joueur[];


  constructor(private joueurService: JoueurService ) {
    this.joueurs = joueurService.listeJoueurs();
    }

  ngOnInit(): void {
  }
  supprimerJoueur(joueur: Joueur)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.joueurService.supprimerJoueur(joueur);
}

}
