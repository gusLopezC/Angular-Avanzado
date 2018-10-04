import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
  public _ajustes: SettingsService ) {

  }

  ngOnInit() {
  }

  cambiaColor(tema: string, link: any) {
    this.aplicarCheck(link);

     const url = `assets/css/colors/${ tema}.css`;
     this._document.getElementById('tema').setAttribute('href', url);

     this._ajustes.ajustes.tema = tema;
     this._ajustes.ajustes.temaUrl = url;
     this._ajustes.guardarAjustes();

  }
  aplicarCheck(link: any): any {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }
  link.classList.add('working');
  }
}
