import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IScreen } from '../../models/IScreen';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements IScreen {

  public personList = new Array<Person>();
  public visible: boolean = false;

  public defaultSwitch: boolean = true;
  public color: Colors = Colors.White;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    console.log("Admin about");
    console.log(this.router);
    console.log(this.activeRoute.snapshot.data['listdata']);
    
    this.personList.push(new Person(1, "a", 21));
    this.personList.push(new Person(2, "b", 22));
    this.personList.push(new Person(3, "c", 23));
  }

  IsScreenSaved(): boolean {
    return true;
  }

  switchVisible() {
    this.visible = !this.visible;
  }

  AssignBlack() {
    this.color = Colors.Black;
  }

  AssignRed() {
    this.color = Colors.Red;
  }

  AssignWhite() {
    this.color = Colors.White;
  }

  ServiceRoute() {
    this.router.navigate(['admin/service']);
  }
}

export enum Colors {
  White,
  Black,
  Blue,
  Red
}
