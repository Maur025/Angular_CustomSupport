import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "src/app/services/api.service";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit, AfterViewInit {
  dataVehicle: Array<any>[]
  dataSource = new MatTableDataSource<any>()
  displayedColumns: string[] = ['position', 'plaque', 'mark', 'model', 'year', "options"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.loadDataList()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadDataList() {
    this.apiService.getAll('vehicle').subscribe(res => {
      this.dataVehicle = res;
      this.dataSource.data = this.dataVehicle;
      console.log(this.dataVehicle);
    })
  }
}
