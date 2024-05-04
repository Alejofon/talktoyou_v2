import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 options = [
  {name: 'Cerrar sesión', value: 'clouse_sesion'},
  {name: 'Cambiar contraseña', value: ''}
 ]

}
