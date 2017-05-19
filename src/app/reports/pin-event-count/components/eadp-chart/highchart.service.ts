/**
 * Created by jilongs on 5/18/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsStatic {

}

@Injectable()
export class HighchartsService {
  _highchartsStatice: HighchartsStatic;

  constructor(highchartsStatic: HighchartsStatic) {
    this._highchartsStatice = highchartsStatic;
    console.log(this._highchartsStatice);
  }

  getHighchartsStatic() {
    return this._highchartsStatice;
  }
}
