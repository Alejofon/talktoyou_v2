import { Component } from '@angular/core';
import {LanguagesService} from '../../services/languages.service';
import {LevelsService} from '../../services/levels.service'

@Component({
  selector: 'app-searchcall',
  templateUrl: './searchcall.component.html',
  styleUrls: ['./searchcall.component.css']
})
export class SearchcallComponent {

  optionselected: any 
  languagues: string[]
  levels: string[]
  descriptions: string[]
  selected_languague : any
  slected_level: any

  constructor(private idiomas:LanguagesService, private niveles:LevelsService){
    this.languagues = this.idiomas.getlanguages_spanish('spanish')
    this.levels = this.niveles.get_levels('spanish')
    this.descriptions = this.niveles.get_description_levels('spanish')

  }

  validateSelection(): Boolean{
    return this.languagues.includes(this.selected_languague) && this.levels.includes(this.slected_level)
  }



}
