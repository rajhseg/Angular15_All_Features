import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rpanelheader',
  templateUrl: './rpanelheader.component.html',
  styleUrls: ['./rpanelheader.component.css']
})
export class RpanelheaderComponent {

  @Input('items') items: Array<string> | null = null;

  @Input('headerTitle') headerTitle: string | null = null;
  
  constructor() {
  
  }

}
