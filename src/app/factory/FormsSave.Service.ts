import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IScreen } from "../models/IScreen";

@Injectable({ providedIn: 'root' })
export class FormsSaveService implements CanDeactivate<IScreen> {
  canDeactivate(component: IScreen, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component != undefined && component.IsScreenSaved != undefined) {
      return component.IsScreenSaved();
    }
    return true;
  }
}
