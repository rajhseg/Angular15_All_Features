import { Component } from '@angular/core';

@Component({
  selector: 'app-rpanel',
  templateUrl: './rpanel.component.html',
  styleUrls: ['./rpanel.component.css']
})
export class RpanelComponent {

  public headerItems: Array<string>
  
  constructor() {
    this.headerItems = new Array<string>();
    this.headerItems.push('8:00 am');
    this.headerItems.push('9:00 am');
    this.headerItems.push('10:00 am');
    this.headerItems.push('11:00 am');
    this.headerItems.push('12:00 pm');
    this.headerItems.push('01:00 pm');
  }
}
