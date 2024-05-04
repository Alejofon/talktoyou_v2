import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/interfaces/loginUser.interface';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser: FormGroup
  mostrarContrasena: boolean = false;

  constructor(private fb: FormBuilder, private fire: FirebaseServiceService, private ruta: Router) {

    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      password: ['', Validators.required]
    })

  }

  // metodo de login 
  login() {

    if (this.loginUser.invalid) {
      return Object.values(this.loginUser.controls).forEach(control => {
        control.markAllAsTouched()
      })
    }

    const user: loginUser = {
      email: this.loginUser.value.email,
      password: this.loginUser.value.password
    }

    this.fire.login(user).then(() => {
      console.log('Login exitoso')
      this.ruta.navigate(['inicio'])

    }).catch(error => {
      console.log(error)
    })



  }

  // Metodos para validar los campos 
  get emailValidate() {
    return this.loginUser.get('email')?.invalid && this.loginUser.get('email')?.touched
  }

  get passwordValidate() {
    return this.loginUser.get('password')?.invalid && this.loginUser.get('password')?.touched
  }
  // Metodo para mostrar la contraseña 
  togglePasswordVisibility() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

}
