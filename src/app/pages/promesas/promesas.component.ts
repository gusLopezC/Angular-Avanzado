import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  // Promesa sirve para hacer peticiones asincronomas no necesariamente peticiones HTTP ni REST

  constructor() {

    // tslint:disable-next-line:no-shadowed-variable
    const promesa = new Promise( (resolve, reject) => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          reject('Hubo un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promesa.then(
      () => console.log('Termino')
    ).catch( error => console.error('Error en la promesa', error));
  }
  ngOnInit() {
  }

}
