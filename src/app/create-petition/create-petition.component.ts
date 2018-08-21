import { Component, Output, EventEmitter } from '@angular/core';
import { Petition } from '../petition.model'
import { PetitionService  } from '../petition.service'

@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.css'],
  providers: [PetitionService]
})
export class CreatePetitionComponent {

}
