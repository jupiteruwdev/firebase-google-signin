import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Text } from '../models/text.model';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firestore: AngularFirestore) { }

  // getText (): Text {
  //   return this.firestore.collection()
  // }

  addContent (text: Text) {
    const data = {...text}
    return this.firestore.collection('data').doc(data.email).set({
      content: data.content
    })
  }

  async getContent (email: string) {
    return this.firestore.collection('data').doc(email).ref.get()
      .then(doc => {
        if (!doc.exists) {
          return ""
        } else {
          return doc.data().content;
        }
      })
  }
}
