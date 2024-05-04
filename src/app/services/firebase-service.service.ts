import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { CollectionReference, DocumentData, Firestore, addDoc, collection } from '@angular/fire/firestore';
import {Usuario} from '../interfaces/usuario.interface'
import { loginUser } from '../interfaces/loginUser.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  usersCollection: CollectionReference<DocumentData>

  constructor(private readonly firestore: Firestore, private auth: Auth) {
    this.usersCollection = collection(this.firestore, 'usuarios')
  }

  adduser(usuario: Usuario){

    return addDoc(this.usersCollection, usuario)

  }

  login(usuario: loginUser){

    const auth = getAuth()

    return signInWithEmailAndPassword(auth, usuario.email, usuario.password)
  }

  createUser(usuario: Usuario){

    return createUserWithEmailAndPassword(this.auth, usuario.email, usuario.password )
  }


}
