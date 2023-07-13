export class panelRowData {
  public Data: string | undefined;
  public ColumnLength: number | undefined;
  public RowIndex: number | undefined;
  public ColumnIndex: number | undefined;

  constructor(data: string, columnLength: number, rowindex: number, columnindex: number) {
    this.Data = data;
    this.ColumnIndex = columnindex;
    this.RowIndex = rowindex;
    this.ColumnLength = columnLength;
  }
}
