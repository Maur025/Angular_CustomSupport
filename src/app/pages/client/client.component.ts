import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from "@angular/material/dialog";
import { ModalCrudClient } from "./client-modal/client-modal.component";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
})

export class ClientComponent implements OnInit, AfterViewInit {
    dataClient: Array<any> = []
    dataSource = new MatTableDataSource<any>()
    displayedColumns: string[] = ['position', 'name', 'lastName', 'mothersLastName', 'documentType', 'documentNumber', 'birthDate', "options"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private apiService: ApiService, public dialog: MatDialog) {
        // console.log('Componente de cliente cargado correctamente.')
    }

    ngOnInit(): void {
        this.loadDataList();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    loadDataList() {
        this.apiService.getAll('client').subscribe(res => {
            this.dataClient = res;
            this.dataSource.data = this.dataClient;
            console.log(this.dataClient);
        })
    }

    openModal() {
        const dialogRef = this.dialog.open(ModalCrudClient, {
            data: { title: 'Crear Cliente' },
        });

        dialogRef.afterClosed().subscribe(res => {
            console.log('Modal cerrrado');
        })
    }

}