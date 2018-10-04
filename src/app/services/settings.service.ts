import { Injectable, Inject } from '@angular/core';


@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor() { }

  guardarAjustes() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
    this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
    console.log('Cargando del localstorage');
    } else {
      console.log('Usando valores del localstorage');

    }
  }

}// end class

interface Ajustes {
  temaUrl: string;
  tema: string;

}
