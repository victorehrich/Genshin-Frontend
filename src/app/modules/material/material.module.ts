import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule
];

@NgModule({
  exports: [MaterialComponents],
  imports: [
    MaterialComponents,
  ]
})
export class MaterialModule { }
