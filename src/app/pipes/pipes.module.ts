import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { revisionAdminPipe } from './revisionAdmin.pipe';



@NgModule({
  declarations: [
    revisionAdminPipe

  ],
  imports: [
    CommonModule
  ],
  exports:[
    revisionAdminPipe

  ]
})
export class PipesModule { }
