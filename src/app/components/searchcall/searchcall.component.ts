import { Component } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';
import { LevelsService } from '../../services/levels.service';
import { call } from '../../interfaces/call.interface'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { object } from '@angular/fire/database';
import {RoomsService} from '../../services/rooms.service'

@Component({
  selector: 'app-searchcall',
  templateUrl: './searchcall.component.html',
  styleUrls: ['./searchcall.component.css']
})
export class SearchcallComponent {

  callform: FormGroup
  optionselected: any
  languagues: string[]
  levels: string[]
  descriptions: string[]
  selected_languague: any
  slected_level: any

  constructor(private idiomas: LanguagesService, private niveles: LevelsService, private fb: FormBuilder, private room: RoomsService) {
    
    this.languagues = this.idiomas.getlanguages_spanish('spanish')
    this.levels = this.niveles.get_levels('spanish')
    this.descriptions = this.niveles.get_description_levels('spanish')

    this.callform = this.fb.group({
      idioma: ['', [Validators.required, this.validateList(this.languagues)]],
      nivel: ['', [Validators.required, this.validateList(this.levels)]]
    })
  }

  //metodo busqueda de sala

  searchRoom(){
    if(this.callform.invalid){
      return Object.values(this.callform.controls).forEach(control => {
        control.markAllAsTouched()
      })
    }
    const call: call = {
      idioma: this.callform.value.idioma,
      nivel: this.callform.value.nivel
    }

    this.room.createRoom(1234,call)

  }

  //Metodo para validar si el idioma y el nivel estan en la lista
  validateList(list: string[]): Validators{

    return (control: AbstractControl): {[key: string]: any} | null => {
      return list.includes(control.value) ? null : {invalidOption: true}
    }

  }

  //metodos para validar el idioma y el nivel.

  get languagueValidate() {
    return this.callform.get('idioma')?.invalid && this.callform.get('idioma')?.touched 
  }

  get levelValidate() {
    return this.callform.get('nivel')?.invalid && this.callform.get('nivel')?.touched 
  }


}
