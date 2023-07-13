import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PanelData } from '../rpanel/panelData';
import { panelRowData } from '../rpanel/panelRowData';

@Component({
  selector: 'app-rpanelrow',
  templateUrl: './rpanelrow.component.html',
  styleUrls: ['./rpanelrow.component.css']
})
export class RpanelrowComponent implements OnChanges {

  @Input('columnsCount') columnsCount: number = 0;

  @Input('rows') rows: Array<PanelData> | null = null;

  constructor() {
    this.rows = new Array<PanelData>();

    //let row: Array<panelRowData> = new Array<panelRowData>();

    //row.push(new panelRowData("A", 1, 0, 0));
    //row.push(new panelRowData("B", 1, 0, 1));
    //row.push(new panelRowData("C", 1, 0, 2));
    //row.push(new panelRowData("D", 1, 0, 3));
    //row.push(new panelRowData("E", 1, 0, 4));
    //row.push(new panelRowData("E", 1, 0, 5));

    //let datarow1: PanelData = new PanelData(1, row);
    //row = new Array<panelRowData>();

    //row.push(new panelRowData("A", 1, 1, 0));
    //row.push(new panelRowData("B", 1, 1, 1));
    //row.push(new panelRowData("C", 1, 1, 2));
    //row.push(new panelRowData("D", 1, 1, 3));
    //row.push(new panelRowData("E", 1, 1, 4));
    //row.push(new panelRowData("E", 1, 0, 5));
    //let datarow2: PanelData = new PanelData(1, row);

    //this.rows.push(datarow1);
    //this.rows.push(datarow2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.clear();
    console.log(changes);
  }

}
