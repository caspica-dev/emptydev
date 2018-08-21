import { Component, OnInit } from '@angular/core';
import { PetitionService  } from '../petition.service'

@Component({
  selector: 'app-petition-detail',
  templateUrl: './petition-detail.component.html',
  styleUrls: ['./petition-detail.component.css'],
  providers: [PetitionService]
})
export class PetitionDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
