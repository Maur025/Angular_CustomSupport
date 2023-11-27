import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';

import { MaterialModule } from "src/app/material.module";
import { FormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { VehicleRoutes } from './vehicle.routing'
import { VehicleComponent } from './vehicle.component';
import { ModalCrudVehicle } from './vehicle-modal/vehicle-modal.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    VehicleComponent,
    ModalCrudVehicle
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(VehicleRoutes),
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    TablerIconsModule.pick(TablerIcons),
    MatTableModule,
    MatPaginatorModule
  ]
})
export class VehicleModule {
}
