import { Component, OnInit } from '@angular/core';
import { PetitionService  } from '../petition.service'
import { Location } from '@angular/common';
import { Petition } from '../petition.model'
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.css'],
  providers: [PetitionService]
})
export class CreatePetitionComponent {


}
