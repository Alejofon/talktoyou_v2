import { Injectable } from '@angular/core';
import { Room } from '../interfaces/room.interface'
import { Usuario } from '../interfaces/usuario.interface';
import { push } from '@angular/fire/database';
import { call } from '../interfaces/call.interface';
import { Mutex } from 'async-mutex';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Firestore, collection, collectionData, doc, docData, setDoc, updateDoc, getDocs, query, where, DocumentData, CollectionReference } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private roomsCollection: CollectionReference<DocumentData>

  constructor(private router: Router, private fire: Firestore) {
    this.roomsCollection = collection(this.fire, 'rooms')
  }

  getRooms(): Observable<Room[]> {
    return collectionData(this.roomsCollection, { idField: 'id' }) as Observable<Room[]>
  }

  async findRoom(user: number, call: call): Promise<Room> {
    const q = query(
      this.roomsCollection,
      where('language', '==', call.idioma),
      where('level', '==', call.nivel),
      where('busy', '<', 5)
    );

    const roomsSnapshot = await getDocs(q);
    let availableRoom: Room | null = null;

    if (!roomsSnapshot.empty) {
      const roomDoc = roomsSnapshot.docs[0];
      const roomData = roomDoc.data();
      availableRoom = {
        id: roomDoc.id,
        capacity: roomData['capacity'],
        busy: roomData['busy'],
        id_participants: roomData['id_participants'],
        language: roomData['language'],
        level: roomData['level'],
        start: roomData['start'].toDate() // Convertir Timestamp a Date
      } as Room;
      availableRoom.busy += 1;
      availableRoom.id_participants.push(user);
      const roomRef = doc(this.roomsCollection, roomDoc.id);  // Crear referencia de documento correctamente
      
      // Convertir el objeto Room a un objeto plano con notación de índices
      const roomUpdate: { [key: string]: any } = {
        capacity: availableRoom.capacity,
        busy: availableRoom.busy,
        id_participants: availableRoom.id_participants,
        language: availableRoom.language,
        level: availableRoom.level,
        start: availableRoom.start
      };

      await updateDoc(roomRef, roomUpdate);
    } else {
      const newRoomId = this.createID();
      availableRoom = {
        id: newRoomId,
        capacity: 5,
        busy: 1,
        id_participants: [user],
        language: call.idioma,
        level: call.nivel,
        start: new Date()
      };
      const newRoomRef = doc(this.roomsCollection, newRoomId);  // Crear referencia de documento correctamente
      await setDoc(newRoomRef, availableRoom);
    }

    return availableRoom;
  }


  async joinRoom(user: number, call: call) {
    const room = await this.findRoom(user, call);
    this.router.navigate([`/call/${room.id}`]);
  }

  getRoomById(id: string): Observable<Room | undefined> {
    const roomRef = doc(this.fire, 'rooms', id);
    return docData(roomRef, { idField: 'id' }) as Observable<Room | undefined>;
  }


  createID() {

    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2); // Asegura que siempre haya dos dígitos
    const day = ('0' + now.getDate()).slice(-2); // Asegura que siempre haya dos dígitos
    const hours = ('0' + now.getHours()).slice(-2); // Asegura que siempre haya dos dígitos
    const minutes = ('0' + now.getMinutes()).slice(-2); // Asegura que siempre haya dos dígitos
    const seconds = ('0' + now.getSeconds()).slice(-2); // Asegura que siempre haya dos dígitos
    const milliseconds = ('00' + now.getMilliseconds()).slice(-3); // Asegura que siempre haya tres dígitos

    const id = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    //const idNumber = parseInt(id)
    //console.log(id); // Ejemplo de salida: "3-20240519-141530123"
    return id
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

}
