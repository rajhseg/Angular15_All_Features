import { Directive, Input, AfterContentInit } from "@angular/core";
import { PanelData } from "../rpanel/panelData";

@Directive({ selector:'[rmatchrowdatasize]'})
export class MatchRowDataSizeDirective implements  AfterContentInit {
    
    ngAfterContentInit(): void {
        if(this.rows){
            let colsSize = 0;

            this.rows.RowDatas?.forEach((x)=> {
              if(x.ColumnLength){
                colsSize = colsSize + x.ColumnLength  
              }
            });

            if(colsSize!=this.size){
                throw new Error("Row data not match with column size, row no"+this.rows.Rownumber);
            }
        }
    }

    @Input('rmatchrowdatasize') size: number | undefined;

    @Input('rows') rows: PanelData | null = null;

}
