import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor() { }

  spanish_levels: string[] = ['Principiante', 'Principiante ++', 'Intermedio', 'Intermedio ++', 'Avanzado', 'Avanzado ++', 'Navtivo']
  spanish_description_levels: string[] = [
    'Principiante: Recientemente comenzaste con el idioma y te estás familiarizando con conceptos básicos como saludar y presentarte.',
    'Principiante ++: Tienes conocimientos básicos del idioma y estás comenzando a comprender frases simples y expresiones comunes.',
    'Intermedio: Puedes comunicarte de manera efectiva en situaciones cotidianas y entender conversaciones simples sobre temas conocidos.',
    'Intermedio ++: Estás mejorando tu fluidez en el idioma y puedes participar en discusiones más complejas sobre una variedad de temas.',
    'Avanzado: Tienes un alto nivel de competencia en el idioma y puedes comunicarte de manera fluida en una amplia gama de situaciones.',
    'Avanzado ++: Dominas el idioma casi por completo, puedes entender y expresarte con facilidad en cualquier situación.',
    'Nativo: El idioma es tu lengua materna y tienes un dominio completo de todas sus complejidades y matices.'
  ]


  get_levels(level: string) {

    switch (level) {
      case 'spanish':
        return this.spanish_levels
      default:
        return this.spanish_levels
    }

  }

  get_description_levels(description: string){
    switch(description){
      case 'spanish':
        return this.spanish_description_levels
      default:
        return this.spanish_description_levels
    }
  }

}
