import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoadingPageComponent } from './pages/loading-page/loading-page.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ErrorPageComponent,
    NavbarComponent,
    LoadingPageComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    SidebarComponent,
    LoadingPageComponent,
    NavbarComponent,

  ],
})
export class SharedModule {}
