import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { RolesRoutingModule } from './roles-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RoleModalComponent } from './components/role-modal/role-modal.component';



@NgModule({
  declarations: [HomeComponent, ListadoComponent, RoleModalComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [HomeComponent],
})
export class RolesModule {}
