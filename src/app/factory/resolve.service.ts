import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<number[]> {

  constructor() { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number[] | Observable<number[]> | Promise<number[]> {
      let nums = [2, 4, 5, 4];
      //return this.delayLoad().then((x) => {
        //return nums;
      //});
      return nums;
  }

  async delayLoad() {
    return await new Promise(x => setTimeout(x, 2000));
  }
}
