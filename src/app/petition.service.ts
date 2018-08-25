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

  //Function to grab the petitions from Firebase
  getPetitions(){
    return this.petitions
  }
  // Function to get the Id of a petition for its details.
  getPetitionById(petitionId: string){
    return this.database.object('/petitions/' + petitionId);
  }
  // Function that pushes petition to the database
  addPetition(newPetition: Petition) {
    this.petitions.push(newPetition)
  }

  // Function to update petition
  updatePetition(localUpdatedPetition){
  var petitionEntryInFirebase = this.getPetitionById(localUpdatedPetition.$key);
  petitionEntryInFirebase.update({title: localUpdatedPetition.title,
    artist: localUpdatedPetition.artist,
    description: localUpdatedPetition.description});
  }

}
