import { Injectable } from '@angular/core';
import {RenderType} from "./constants";

const Highcharts = require('highcharts');
const Highstock = require('highcharts/highstock');


@Injectable()
export class HighchartsService {
    private _highchartsStatice: Object;

    constructor() {
    }
    init(type: RenderType){
      console.log(`init with ${type}`);
      if(type == RenderType.HIGHCHARTS){
        this._highchartsStatice = Highcharts;
      }else if(type == RenderType.HIGHSTOCK){
        this._highchartsStatice = Highstock;
      }else{
        throw new Error(`${type} is unknown chart type.`);
      }
    }

    getHighchartsStatic() {
        return this._highchartsStatice;
    }
}
