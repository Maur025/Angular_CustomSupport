import { Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-crud-client',
    templateUrl: './client-modal.component.html',
    styleUrls: ['./client-modal.component.scss'],
})

export class ModalCrudClient implements OnInit, OnDestroy, OnChanges {
    //Form
    name: string = ''
    lastName: string = ''
    mothersLastName: string = ''
    documentType: string = ''
    documentNumber: string = ''
    birthDate: string = ''

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges): void {

    }

    ngOnDestroy(): void {

    }

    constructor(public dialogRef: MatDialogRef<ModalCrudClient>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    saveForm() {
        let dataForm = {
            name: this.name,
            lastname: this.lastName,
            mothersLastName: this.mothersLastName,
            documentType: this.documentType,
            documentNumber: this.documentNumber,
            birthDate: this.birthDate
        }
        console.log(dataForm);
        this.close();
    }

    close() {
        this.dialogRef.close();
    }
}