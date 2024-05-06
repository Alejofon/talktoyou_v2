import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  
  languages_spanish: string[]=['Afrikáans', 'Albanés', 'Alemán', 'Amhárico', 'Árabe', 'Armenio', 'Azerbaiyano', 'Bengalí', 'Bielorruso', 'Birmano', 'Bosnio', 'Búlgaro', 'Canarés', 'Catalán', 'Cebuano', 'Checo', 'Chichewa', 'Chino (simplificado)', 'Chino (tradicional)', 'Chitonga', 'Cingalés', 'Coreano', 'Corso', 'Croata', 'Danés', 'Eslovaco', 'Esloveno', 'Español', 'Esperanto', 'Estonio', 'Euskera', 'Faroés', 'Farsi', 'Finlandés', 'Francés', 'Frisón', 'Gaélico escocés', 'Galés', 'Gallego', 'Georgiano', 'Griego', 'Gujarati', 'Haitiano criollo', 'Hausa', 'Hawaiano', 'Hebreo', 'Hindi', 'Hmong', 'Húngaro', 'Icelandico', 'Igbo', 'Indonesio', 'Inglés', 'Irlandés', 'Italiano', 'Japonés', 'Javanés', 'Kannada', 'Kazajo', 'Kikuyu', 'Kirguís', 'Kirundi', 'Kurdo', 'Lao', 'Latín', 'Letón', 'Lingala', 'Lituano', 'Luxemburgués', 'Macedonio', 'Malayo', 'Malayalam', 'Malgache', 'Maltés', 'Maorí', 'Maratí', 'Mongol', 'Nepalí', 'Noruego', 'Oriya', 'Panyabí', 'Pastún', 'Persa', 'Polaco', 'Portugués', 'Quechua', 'Rumano', 'Ruso', 'Samoano', 'Serbio', 'Shona', 'Sindhi', 'Somalí', 'Suajili', 'Sueco', 'Sundanés', 'Tagalo', 'Tailandés', 'Tamil', 'Tayiko', 'Telugu', 'Turco', 'Ucraniano', 'Urdu', 'Uzbeko', 'Vietnamita', 'Xhosa', 'Yidis', 'Yoruba', 'Zulú']
  languages_english: string[] = ['Afrikaans', 'Albanian', 'German', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani', 'Bengali', 'Belarusian', 'Burmese', 'Bosnian', 'Bulgarian', 'Kannada', 'Catalan', 'Cebuano', 'Czech', 'Chichewa', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Tonga', 'Sinhala', 'Korean', 'Corsican', 'Croatian', 'Danish', 'Slovak', 'Slovenian', 'Spanish', 'Esperanto', 'Estonian', 'Basque', 'Faroese', 'Persian', 'Finnish', 'French', 'Frisian', 'Scottish Gaelic', 'Welsh', 'Galician', 'Georgian', 'Greek', 'Gujarati', 'Haitian Creole', 'Hausa', 'Hawaiian', 'Hebrew', 'Hindi', 'Hmong', 'Hungarian', 'Icelandic', 'Igbo', 'Indonesian', 'English', 'Irish', 'Italian', 'Japanese', 'Javanese', 'Kannada', 'Kazakh', 'Kikuyu', 'Kyrgyz', 'Kirundi', 'Kurdish', 'Lao', 'Latin', 'Latvian', 'Lingala', 'Lithuanian', 'Luxembourgish', 'Macedonian', 'Malay', 'Malayalam', 'Malagasy', 'Maltese', 'Maori', 'Marathi', 'Mongolian', 'Nepali', 'Norwegian', 'Oriya', 'Punjabi', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Quechua', 'Romanian', 'Russian', 'Samoan', 'Serbian', 'Shona', 'Sindhi', 'Somali', 'Swahili', 'Swedish', 'Sundanese', 'Tagalog', 'Thai', 'Tamil', 'Tajik', 'Telugu', 'Turkish', 'Ukrainian', 'Urdu', 'Uzbek', 'Vietnamese', 'Xhosa', 'Yiddish', 'Yoruba', 'Zulu']

  constructor() { }

  getlanguages_spanish(idioma: string){
    switch(idioma){
      case 'spanish':
        return this.languages_spanish
        break
      default:
        return this.languages_english
    }
  }
}
