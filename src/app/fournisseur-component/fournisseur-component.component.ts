import { Component } from '@angular/core';
import { Fournisseur } from '../core/fournisseur';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
  
 fournisseur  ={

  idFournisseur:105,
  code : 'A104B89',
  libelle : 'MyTeck',
  hide: false

 }
 hide() {
  this.fournisseur.hide=true;
  console.log(this.fournisseur.hide);
}

}

