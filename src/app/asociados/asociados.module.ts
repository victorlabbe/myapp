import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociadosPageRoutingModule } from './asociados-routing.module';

import { AsociadosPage } from './asociados.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociadosPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [AsociadosPage]
})
export class AsociadosPageModule {}
