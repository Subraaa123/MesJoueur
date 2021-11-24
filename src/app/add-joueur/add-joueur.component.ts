import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  newJoueur = new Joueur();

  constructor(private joueurService: JoueurService) { }

  addJoueur(){
    this.joueurService.ajouterJoueur(this.newJoueur);
    console.log(this.newJoueur);
    }

  ngOnInit(): void {
  }
  

}
