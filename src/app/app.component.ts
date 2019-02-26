import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Listado de personas';

  constructor(private loginService: LoginService){}
  

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBnrwK34TTSmmQeUjF-WGLnsyCKP6YwZFs",
      authDomain: "listado-personas-3e497.firebaseapp.com",
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }

}
