import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  createUser: FormGroup
  submitted = false
  validatePassword = false
  userExist = false


  constructor(private fb: FormBuilder, private fire: FirebaseServiceService, private toastr: ToastrService, private ruta: Router) {

    this.createUser = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      re_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })

  }

  register() {

    if (this.createUser.invalid) {
      return Object.values(this.createUser.controls).forEach(control => {
        control.markAllAsTouched()
      })
    }

    this.submitted = true

    const user: Usuario = {
      nombre: this.createUser.value.userName,
      email: this.createUser.value.email,
      password: this.createUser.value.password
    }

    if (this.createUser.value.password === this.createUser.value.re_password) {

      this.fire.createUser(user).then(() => {
        console.log('usuario creado')
        this.fire.adduser(user).then(() => {
          console.log('Registro Exitoso')
        }).catch(error => {
          console.log(error)
        })
        this.toastr.success('Exito', 'Usuario creado', {
          positionClass: 'toast-top-right',
          progressAnimation: 'decreasing',
        })
        this.validatePassword = false
        this.ruta.navigate(['inicio'])
      }).catch(error => {
        console.log(error)
        this.toastr.error('Error!', error)
      })

    } else {
      this.validatePassword = true
    }


  }

  //Metodos para validar los datos ingresados en en formulario

  get nameValidate() {
    return this.createUser.get('userName')?.invalid && this.createUser.get('userName')?.touched
  }
  get emailValidate() {
    return this.createUser.get('email')?.invalid && this.createUser.get('email')?.touched
  }
  get passwordValidate() {
    return this.createUser.get('password')?.invalid && this.createUser.get('password')?.touched
  }
  get rePaswordValidate() {
    return this.createUser.get('re_password')?.invalid && this.createUser.get('re_password')?.touched
  }

  //validar si el correo existe





}
