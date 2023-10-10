import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [    
    { title: 'Home', url: '/home', icon: 'Home' },
    { title: 'Asociados', url: '/asociados', icon: 'people' },
    { title: 'Dietas', url: '/dietas', icon: 'fast-food' },    
    { title: 'Pago', url: '/pago', icon: 'card' },
    { title: 'Reserva', url: '/reservas', icon: 'calendar' },
    { title: 'Tutoriales', url: '/tutoriales', icon: 'videocam' },
    { title: 'Check-in', url: '/checkin', icon: 'shield-checkmark' },
    { title: 'Cerrar sesion', url: '/login', icon: 'log-in' }
  ];
  public labels = [];
  constructor() {}
}
