import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import { Loginv2Component } from './pages/login/loginv2.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    Loginv2Component,
    RegistroComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    // FlexLayoutModule,
    MaterialModule,
  ],
})
export class AuthModule {}
