import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-date-cell-editor',
  templateUrl: './date-cell-editor.component.html',
  styleUrls: ['./date-cell-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateCellEditorComponent
  implements ICellEditorAngularComp, AfterViewInit {
  private params: any;
  public value: Date;
  public minValue: Date;

  @ViewChild('input') public input: ElementRef<HTMLInputElement>;

  agInit(params: any): void {
    this.params = params;
    this.value = this.params.value ? new Date(this.params.value) : null;
    this.minValue = this.params.data.accessControlLoaned?.date;
  }

  getValue(): Date {
    return this.input.nativeElement.valueAsDate;
  }

  isPopup(): boolean {
    return true;
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }
}
