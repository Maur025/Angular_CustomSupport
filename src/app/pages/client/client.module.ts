import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from 'ng-apexcharts';

import { MaterialModule } from "src/app/material.module";
import { FormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { ClientRoutes } from "./client.routing";
import { ClientComponent } from './client.component';
import { ModalCrudClient } from './client-modal/client-modal.component'

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        ClientComponent,
        ModalCrudClient
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ClientRoutes),
        MaterialModule,
        FormsModule,
        NgApexchartsModule,
        TablerIconsModule.pick(TablerIcons),
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule
    ]
})
export class ClientModule {
}