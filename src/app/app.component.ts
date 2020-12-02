import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import * as dayjs from 'dayjs';
import { AgGridHelperService } from './ag-grid-helper.service';
import { ColumnTypeEnum } from './column-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public gridOptions: GridOptions;
  constructor(private agGridHelperService: AgGridHelperService) {}

  public ngOnInit(): void {
    this.gridOptions = this.getGridOptions();
  }

  private getGridOptions(): GridOptions {
    return {
      ...this.agGridHelperService.getDefaultAgGridOptions(),
      columnDefs: this.getColumnDefs(),
      rowData: this.getRowData(),
    };
  }

  private getColumnDefs(): (ColDef | ColGroupDef)[] {
    return [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
      {
        field: 'created',
        type: ColumnTypeEnum.date.toString(),
        editable: true,
      },
    ];
  }

  private getRowData(): any[] {
    return [
      { make: 'Toyota', model: 'Celica', price: 35000, created: dayjs() },
      {
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
        created: dayjs().add(5, 'd'),
      },
      {
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
        created: dayjs().subtract(3, 'd'),
      },
    ];
  }
}
