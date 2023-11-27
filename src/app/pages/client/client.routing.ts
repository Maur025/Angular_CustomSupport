import { Routes } from '@angular/router';

//pages
import { ClientComponent } from './client.component';

export const ClientRoutes: Routes = [
    {
        path: '',
        component: ClientComponent,
        data: {
            title: "Clientes",
        },
    },
];