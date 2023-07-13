import { Component } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private statusService: StatusService) { }

  getError() {
    this.statusService.get401().subscribe();
  }

}
