import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()

export class DataService {
    constructor(private httpClient: HttpClient,
                private loginService: LoginService) {}


    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-3e497.firebaseio.com/datos.json?auth=' + token);
    }

    //Guardar personas
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-3e497.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
            (response) => {
                console.log("resultado de guardar Personas: " + response);
            },
            (error)=> console.log("Error al guardar Personas" + error)
        );
    }

    modificarPersona(index:number, persona:Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-3e497.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.put(url, persona).subscribe(
            response => console.log("resultado de modificar Persona" + response),
            error => console.log("Error en  modificar Persona:" + error)
        )
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();

        let url: string;
        url = 'https://listado-personas-3e497.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).subscribe(
            response => console.log("resultado de eliminar Persona" + response),
            error => console.log("Error en  eliminar Persona:" + error)
        )
    }

}