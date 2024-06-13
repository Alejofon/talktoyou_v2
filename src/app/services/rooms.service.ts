import { Injectable } from '@angular/core';
import { room } from '../interfaces/room.interface'
import { Usuario } from '../interfaces/usuario.interface';
import { push } from '@angular/fire/database';
import { call } from '../interfaces/call.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsActive?: room[]

  constructor() { }

  createRoom(user: number, call: call) {

    const now = new Date()

    const newRoom: room = {
      id: this.createID(),
      capacity: 5,
      id_participants: [user],
      languague: call.idioma,
      level: call.nivel,
      start: now,
    }

    console.log(newRoom)

  }

  createID() {
    
    const itemCount = this.roomsActive?.length

    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2); // Asegura que siempre haya dos dígitos
    const day = ('0' + now.getDate()).slice(-2); // Asegura que siempre haya dos dígitos
    const hours = ('0' + now.getHours()).slice(-2); // Asegura que siempre haya dos dígitos
    const minutes = ('0' + now.getMinutes()).slice(-2); // Asegura que siempre haya dos dígitos
    const seconds = ('0' + now.getSeconds()).slice(-2); // Asegura que siempre haya dos dígitos
    const milliseconds = ('00' + now.getMilliseconds()).slice(-3); // Asegura que siempre haya tres dígitos

    const id = `${itemCount}${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    const idNumber = parseInt(id)
    //console.log(id); // Ejemplo de salida: "3-20240519-141530123"
    return idNumber
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

}
