import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey = '5122229d2c94353906c55abef5a61d41';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor() { }
  buscarInfoClimaCidadeAtual() {
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid=' +this.apiKey+'&lang=pt_br&units=metrics';

    console.log(urlCompleta);
}
}