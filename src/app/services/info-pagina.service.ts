import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

   cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      console.log(resp);
      this.cargada = true;
      this.info = resp;
    });
   }

  cargarEquipo() {
    this.http.get('https://angular-html-58698.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
      console.log(resp);
      this.cargada = true;
      this.equipo = resp;
    });
  }
}
