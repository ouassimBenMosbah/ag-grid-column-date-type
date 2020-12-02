import { Injectable } from '@angular/core';
import {
  GetQuickFilterTextParams,
  GridOptions,
  ValueFormatterParams,
} from 'ag-grid-community';
import * as dayjs from 'dayjs';
import { ColumnTypeEnum } from './column-type.enum';
import { DateCellEditorComponent } from './date-cell-editor/date-cell-editor.component';

@Injectable({
  providedIn: 'root',
})
export class AgGridHelperService {
  constructor() {}

  public getDefaultAgGridOptions(): GridOptions {
    return {
      /*
       * ...
       * Add whatever options you want *
       * ...
       */
      stopEditingWhenGridLosesFocus: true,
      defaultColDef: {
        editable: false,
        sortable: true,
        filter: true,
        resizable: true,
        width: 100,
        menuTabs: ['filterMenuTab'],
        filterParams: {
          caseSensitive: false,
        },
      },
      columnTypes: {
        /* New column type added */
        [ColumnTypeEnum.date.toString()]: {
          width: 100,
          cellEditorFramework: DateCellEditorComponent,
          filter: 'agDateColumnFilter',
          filterParams: { comparator: this.agGridDateCompataror },
          valueFormatter: (params: ValueFormatterParams): string =>
            params.value ? dayjs(params.value).format('DD/MM/YY') : null,
          getQuickFilterText: (params: GetQuickFilterTextParams): string =>
            params.value ? dayjs(params.value).format('DD/MM/YY') : null,
        },
      },
    };
  }

  private agGridDateCompataror(dateA: Date, dateB: string): -1 | 0 | 1 {
    if (!dateA || !dateB) {
      return 0;
    }

    if (dayjs(dateA).isAfter(dayjs(dateB))) {
      return -1;
    } else if (dayjs(dateA).isBefore(dayjs(dateB))) {
      return 1;
    }
    return 0;
  }
}
