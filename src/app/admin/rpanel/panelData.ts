import { panelRowData } from "./panelRowData";

export class PanelData {
  public Rownumber: number | undefined;
  public RowDatas: Array<panelRowData> | undefined;

  constructor(rownumber: number, rowsDatas: Array<panelRowData>) {
    this.Rownumber = rownumber;
    this.RowDatas = rowsDatas;
  }
}
