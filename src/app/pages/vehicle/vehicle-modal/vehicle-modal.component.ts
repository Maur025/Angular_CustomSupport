import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-modal-crud-client',
    templateUrl: './vehicle-modal.component.html'
})

export class ModalCrudVehicle implements OnInit, OnDestroy, OnChanges {
    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {

    }

    ngOnDestroy(): void {

    }

    constructor() {
        console.log("Modal Funcionando");

    }
}