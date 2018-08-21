import { Component } from '@angular/core';
import { PetitionService  } from '../petition.service'

@Component({
  selector: 'app-browse-petitions',
  templateUrl: './browse-petitions.component.html',
  styleUrls: ['./browse-petitions.component.css'],
  providers: [PetitionService]
})
export class BrowsePetitionsComponent {

}
