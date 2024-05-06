import { Component } from '@angular/core';
import {LanguagesService} from '../../services/languages.service'

@Component({
  selector: 'app-searchcall',
  templateUrl: './searchcall.component.html',
  styleUrls: ['./searchcall.component.css']
})
export class SearchcallComponent {

  optionselected: any 
  languagues: string[]

  constructor(private idiomas:LanguagesService){
    this.languagues = this.idiomas.getlanguages_spanish('spanish')
  }

}
