import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CallComponent } from './components/call/call.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftpubliComponent } from './components/leftpubli/leftpubli.component';
import { RightpubliComponent } from './components/rightpubli/rightpubli.component';
import { SearchcallComponent } from './components/searchcall/searchcall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    CallComponent,
    SpinnerComponent,
    LeftpubliComponent,
    RightpubliComponent,
    SearchcallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"talktoyouv2","appId":"1:952562668613:web:41bae8c3d34b36e936bf2c","storageBucket":"talktoyouv2.appspot.com","apiKey":"AIzaSyB26jYS9tV75cDGMXXq3OXQQBKbFKWdtHM","authDomain":"talktoyouv2.firebaseapp.com","messagingSenderId":"952562668613"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
