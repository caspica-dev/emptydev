import { Injectable } from '@angular/core';
import { Petition } from './petition.model';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { MockPetitions } from './mock-petitions';

@Injectable()
export class PetitionService {
  petitions: FirebaseListObservable<any[]>
  constructor(private database: AngularFireDatabase) {
    this.petitions = database.list('petitions')
  }
}
