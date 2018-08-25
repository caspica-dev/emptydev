import { Component, Input } from '@angular/core';
import { PetitionService  } from '../petition.service'


@Component({
  selector: 'app-edit-petition',
  templateUrl: './edit-petition.component.html',
  styleUrls: ['./edit-petition.component.css'],
  providers: [PetitionService]
})
export class EditPetitionComponent {
  @Input() selectedPetition;

  constructor(private petitionService: PetitionService) {}

  beginUpdatingPetition(petitionToUpdate){
    this.petitionService.updatePetition(petitionToUpdate)
  }
}
