import { Injectable } from '@angular/core';
import { Petition } from './petition.model';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { MockPetitions } from './mock-petitions';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class PetitionService {
  petitions: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.petitions = database.list('petitions')
  }

  getPetitions(){
    return this.petitions
  }
  getPetitionById(petitionId: string){
    return this.database.object('/petitions/' + petitionId);
  }
  addPetition(newPetition: Petition) {
    this.petitions.push(newPetition)
  }
}
