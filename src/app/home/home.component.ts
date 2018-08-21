import { Component, OnInit } from '@angular/core';
import { PetitionService  } from '../petition.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PetitionService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
