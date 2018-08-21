import { Component, OnInit } from '@angular/core';
import { PetitionService  } from '../petition.service'

@Component({
  selector: 'app-edit-petition',
  templateUrl: './edit-petition.component.html',
  styleUrls: ['./edit-petition.component.css'],
  providers: [PetitionService]
})
export class EditPetitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
