import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

interface TutInterface {}

@Injectable({
  providedIn: 'root',
})
export class FirebaseTutService {
  firebaseTutRef: AngularFirestoreCollection<TutInterface>;

  constructor(private afs: AngularFirestore) {
    this.firebaseTutRef = afs.collection('firebaseTut');
  }

  add(tut: TutInterface): void {
    this.firebaseTutRef.add(tut);
  }

  byId(id: string) {
    return this.firebaseTutRef.doc(id).get();
  }

  update(id: string, tut: TutInterface) {
    return this.firebaseTutRef.doc(id).update(tut);
  }

  set(id: string, tut: TutInterface) {
    return this.firebaseTutRef.doc(id).set(tut);
  }

  delete(id: string) {
    return this.firebaseTutRef.doc(id).delete();
  }

  snapshotChanges() {
    return this.firebaseTutRef.snapshotChanges();
  }

  valueChanges(options: { idField?: string } = {}) {
    return this.firebaseTutRef.valueChanges(options);
  }
}
