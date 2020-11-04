import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private dbFire : AngularFirestore) { }

  public getList(juego : string){
    return this.dbFire.collection(juego).valueChanges();
  }

  public addElement(juego : string, email : string, score : number){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let autoId = '';

    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    this.dbFire.collection(juego).add({email : email, score : score});
    //doc(autoId).set(data,{merge : true});
  }
}
