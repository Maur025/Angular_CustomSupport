import { Routes } from '@angular/router';

//pages
import { VehicleComponent } from './vehicle.component';

export const VehicleRoutes: Routes = [
    {
        path: '',
        component: VehicleComponent,
        data: {
            title: "Vehiculos",
        },
    },
];