import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {
    personas: Persona[] = [];


    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService,
                private dataService: DataService) { }


    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }/**/

    agregarPersona(persona: Persona) {

        this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona.nombre + " apellido: " + persona.apellido);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(index, persona);
    }

    eliminarPersona(index: number){
        this.personas.splice(index, 1);
        this.dataService.eliminarPersona(index);
        //se vuelve a guardar el array
        this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataService.guardarPersonas(this.personas);
        }
    }

}